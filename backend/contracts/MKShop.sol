// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "./MKShopHelpers.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MKShop is ReentrancyGuard, Ownable, MKShopHelpers {
    uint256 public nextProductId;
    uint256 public nextOrderId;

    struct Product {
        uint256 id;
        uint256 price;
        uint256 stock;
        string name;
        bool isActive;
    }

    struct OrderItem {
        uint256 productId;
        uint256 quantity;
    }

    struct Order {
        uint256 id;
        uint256 totalPrice;
        address payable buyer;
        OrderStatus status;
        OrderItem[] items;
    }

    enum OrderStatus {
        Placed,
        Shipped,
        Delivered,
        Cancelled
    }

    mapping(uint256 productId => Product) public products;
    mapping(uint256 orderId => Order) public orders;

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
        products[productId] = Product(productId, _price, _stock, _name, true);

        emit ProductAdded(productId, _name, _price, _stock);
    }

    function updateProduct(
        uint256 _productId,
        uint256 _price,
        uint256 _stock,
        string memory _name,
        bool _isActive
    ) external onlyOwner {
        performSanityCheck();

        if (_productId >= nextProductId) revert ProductDoesNotExist();
        if (bytes(products[_productId].name).length == 0)
            revert ProductDoesNotExist();
        if (bytes(_name).length == 0) revert EmptyName();
        if (_price == 0) revert InvalidPrice();

        Product storage product = products[_productId];
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

    function shipOrder(uint256 _orderId) external onlyOwner {
        performSanityCheck();

        Order storage order = orders[_orderId];
        if (order.status != OrderStatus.Placed) revert InvalidOrderStatus();

        order.status = OrderStatus.Shipped;
        emit OrderShipped(_orderId);
    }

    function deliverOrder(uint256 _orderId) external onlyOwner {
        performSanityCheck();

        Order storage order = orders[_orderId];
        if (order.status != OrderStatus.Shipped) revert InvalidOrderStatus();

        order.status = OrderStatus.Delivered;
        emit OrderDelivered(_orderId);
    }

    function cancelOrder(uint256 _orderId) external nonReentrant {
        performSanityCheck();

        Order storage order = orders[_orderId];
        if (msg.sender != order.buyer && msg.sender != owner())
            revert Unauthorized();
        if (order.status != OrderStatus.Placed) revert InvalidOrderStatus();

        order.status = OrderStatus.Cancelled;

        for (uint256 i = 0; i < order.items.length; i++) {
            Product storage product = products[order.items[i].productId];
            product.stock += order.items[i].quantity;
        }

        (bool sent, ) = order.buyer.call{value: order.totalPrice}("");
        if (!sent) revert EthTransferFailed();

        emit OrderCancelled(_orderId);
    }

    function withdrawFunds(uint256 _amount) external onlyOwner {
        if (_amount > address(this).balance) revert InsufficientBalance();
        (bool sent, ) = owner().call{value: _amount}("");
        if (!sent) revert EthTransferFailed();
    }

    // Allow the contract to receive ETH
    receive() external payable {}
}
