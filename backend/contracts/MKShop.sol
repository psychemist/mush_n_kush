// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "./MKShopHelpers.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MKShop is ReentrancyGuard, Ownable, MKShopHelpers {
    uint256 public nextProductId;
    uint256 public nextOrderId;
    uint256 public platformFeePercentage = 5;

    struct Product {
        uint256 id;
        uint256 price;
        uint256 stock;
        string name;
        address payable seller;
        bool isActive;
    }

    struct OrderItem {
        uint256 productId;
        uint256 quantity;
    }

    struct Order {
        uint256 id;
        uint256 totalPrice;
        uint256 shippingFee;
        address payable buyer;
        address payable shipper;
        OrderStatus status;
        OrderItem[] items;
    }

    enum OrderStatus {
        Placed,
        Cancelled,
        Shipped,
        Delivered,
        Fulfilled
    }

    mapping(uint256 productId => Product) public products;
    mapping(uint256 orderId => Order) public orders;
    mapping(uint256 => bool) public isDelivered;
    mapping(uint256 => bool) public isFulfilled;

    constructor() Ownable(msg.sender) {}

    function addProduct(
        uint256 _price,
        uint256 _stock,
        string memory _name
    ) external onlyOwner {
        performSanityCheck();

        if (bytes(_name).length == 0) revert EmptyName();
        if (_price == 0) revert InvalidPrice();

        uint256 productId = nextProductId++;
        products[productId] = Product(
            productId,
            _price,
            _stock,
            _name,
            payable(msg.sender),
            true
        );

        emit ProductAdded(productId, msg.sender, _name, _price, _stock);
    }

    function updateProduct(
        uint256 _productId,
        uint256 _price,
        uint256 _stock,
        string memory _name,
        bool _isActive
    ) external onlyOwner {
        performSanityCheck();

        Product storage product = products[_productId];
        if (msg.sender != product.seller) revert UnauthorizedSender();
        if (_productId >= nextProductId) revert ProductDoesNotExist();

        if (bytes(product.name).length == 0) revert ProductDoesNotExist();
        if (bytes(_name).length == 0) revert EmptyName();
        if (_price == 0) revert InvalidPrice();

        product.name = _name;
        product.price = _price;
        product.stock = _stock;
        product.isActive = _isActive;

        emit ProductUpdated(_productId, _name, _price, _stock, _isActive);
    }

    function placeOrder(
        OrderItem[] memory _items
    ) external payable nonReentrant {
        performSanityCheck();
        if (_items.length == 0) revert EmptyOrder();

        uint256 orderId = nextOrderId++;
        uint256 totalPrice = 0;

        Order storage newOrder = orders[orderId];
        newOrder.id = orderId;
        newOrder.buyer = payable(msg.sender);
        newOrder.status = OrderStatus.Placed;

        for (uint256 i = 0; i < _items.length; i++) {
            uint256 productId = _items[i].productId;
            uint256 quantity = _items[i].quantity;

            if (productId >= nextProductId) revert ProductDoesNotExist();
            if (quantity == 0) revert InvalidQuantity();

            Product storage product = products[productId];
            if (!product.isActive) revert ProductNotActive();
            if (product.stock < quantity) revert InsufficientStock();

            uint256 itemPrice = product.price * quantity;
            totalPrice += itemPrice;
            product.stock -= quantity;

            newOrder.items.push(OrderItem(productId, quantity));
        }

        if (msg.value != totalPrice) revert IncorrectPayment();

        newOrder.totalPrice = totalPrice;

        emit OrderPlaced(orderId, msg.sender, totalPrice);
    }

    function cancelOrder(uint256 _orderId) external nonReentrant {
        performSanityCheck();

        Order storage order = orders[_orderId];
        if (msg.sender != order.buyer) revert UnauthorizedSender();
        if (order.status != OrderStatus.Placed) revert InvalidOrderStatus();

        order.status = OrderStatus.Cancelled;

        for (uint256 i = 0; i < order.items.length; i++) {
            Product storage product = products[order.items[i].productId];
            product.stock += order.items[i].quantity;
        }

        (bool sent, ) = order.buyer.call{value: order.totalPrice}("");
        if (!sent) revert PaymentFailed();

        emit OrderCancelled(_orderId);
    }

    function shipOrder(
        uint256 _orderId,
        address payable _shipper,
        uint256 _shippingFee
    ) external onlyOwner {
        performSanityCheck();

        Order storage order = orders[_orderId];
        if (msg.sender != order.buyer) revert UnauthorizedSender();
        if (order.status != OrderStatus.Placed) revert InvalidOrderStatus();

        order.status = OrderStatus.Shipped;
        order.shipper = payable(_shipper);
        order.shippingFee = _shippingFee;

        emit OrderShipped(_orderId, _shipper);
    }

    function confirmDropoff(uint256 _orderId) external {
        performSanityCheck();

        Order storage order = orders[_orderId];
        if (msg.sender != order.shipper) revert UnauthorizedSender();
        if (order.status != OrderStatus.Shipped) revert InvalidOrderStatus();

        order.status = OrderStatus.Delivered;
        isDelivered[_orderId] = true;

        emit OrderDelivered(_orderId);
    }

    function confirmPickup(uint256 _orderId) external {
        performSanityCheck();

        Order storage order = orders[_orderId];
        if (msg.sender != order.buyer) revert UnauthorizedSender();
        if (order.status != OrderStatus.Delivered) revert InvalidOrderStatus();

        order.status = OrderStatus.Fulfilled;
        isFulfilled[_orderId] = true;

        distributePayment(_orderId);

        emit OrderFulfilled(_orderId);
    }

    function distributePayment(uint256 _orderId) public {
        Order storage order = orders[_orderId];
        if (msg.sender != order.buyer) revert UnauthorizedSender();
        if (order.status != OrderStatus.Fulfilled) revert InvalidOrderStatus();

        // uint256 platformFee = (order.totalPrice * platformFeePercentage) / 100;
        // uint256 sellerPayment = order.totalPrice - platformFee - order.shippingFee;

        // Pay seller
        for (uint256 i = 0; i < order.items.length; i++) {
            Product storage product = products[order.items[i].productId];
            uint256 itemPayment = (product.price *
                order.items[i].quantity *
                (100 - platformFeePercentage)) / 100;

            (bool success, ) = product.seller.call{value: itemPayment}("");
            if (!success) revert PaymentFailed();

            emit PaymentDistributed(product.seller, itemPayment);
        }

        // Pay shipper
        (bool sent, ) = order.shipper.call{value: order.shippingFee}("");
        if (!sent) revert PaymentFailed();

        emit PaymentDistributed(order.shipper, order.shippingFee);
    }

    function setPlatformFee(uint256 _feePercentage) external onlyOwner {
        if (_feePercentage >= 5) revert InvalidPrice(); // Max 5% platform fee
        platformFeePercentage = _feePercentage;
    }

    function withdrawFunds(uint256 _amount) external onlyOwner {
        if (_amount > address(this).balance) revert InsufficientBalance();
        (bool sent, ) = owner().call{value: _amount}("");
        if (!sent) revert PaymentFailed();
    }

    // Allow the contract to receive ETH
    receive() external payable {}
}

// Add access controlto restrict Sellers, Buyers, Shippers
// Change Order status fromenum to booleans?
