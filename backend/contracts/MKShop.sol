// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract DecentralizedShop is ReentrancyGuard, Ownable {
    // Custom Errors
    error EmptyName();
    error InvalidPrice();
    error ProductNotExist();
    error InvalidQuantity();
    error ProductNotActive();
    error InsufficientStock();
    error IncorrectPayment();
    error Unauthorized();
    error InvalidOrderStatus();
    error EthTransferFailed();
    error InsufficientBalance();
    error EmptyOrder();

    struct Product {
        uint256 id;
        string name;
        uint256 price;
        uint256 stock;
        bool isActive;
    }

    struct OrderItem {
        uint256 productId;
        uint256 quantity;
    }

    struct Order {
        uint256 id;
        address payable buyer;
        OrderItem[] items;
        uint256 totalPrice;
        OrderStatus status;
    }

    enum OrderStatus {
        Placed,
        Paid,
        Shipped,
        Delivered,
        Cancelled
    }

    mapping(uint256 => Product) public products;
    mapping(uint256 => Order) public orders;

    uint256 public nextProductId;
    uint256 public nextOrderId;

    event ProductAdded(
        uint256 indexed productId,
        string name,
        uint256 price,
        uint256 stock
    );
    event ProductUpdated(
        uint256 indexed productId,
        string name,
        uint256 price,
        uint256 stock
    );
    event OrderPlaced(
        uint256 indexed orderId,
        address indexed buyer,
        uint256 totalPrice
    );
    event OrderItemAdded(
        uint256 indexed orderId,
        uint256 productId,
        uint256 quantity
    );
    event OrderPaid(uint256 indexed orderId);
    event OrderShipped(uint256 indexed orderId);
    event OrderDelivered(uint256 indexed orderId);
    event OrderCancelled(uint256 indexed orderId);

    constructor() Ownable(msg.sender) {}

    function addProduct(
        string memory _name,
        uint256 _price,
        uint256 _stock
    ) external onlyOwner {
        if (bytes(_name).length == 0) revert EmptyName();
        if (_price == 0) revert InvalidPrice();

        uint256 productId = nextProductId++;
        products[productId] = Product(productId, _name, _price, _stock, true);

        emit ProductAdded(productId, _name, _price, _stock);
    }

    function updateProduct(
        uint256 _productId,
        string memory _name,
        uint256 _price,
        uint256 _stock,
        bool _isActive
    ) external onlyOwner {
        if (_productId >= nextProductId) revert ProductNotExist();
        if (bytes(_name).length == 0) revert EmptyName();
        if (_price == 0) revert InvalidPrice();

        Product storage product = products[_productId];
        product.name = _name;
        product.price = _price;
        product.stock = _stock;
        product.isActive = _isActive;

        emit ProductUpdated(_productId, _name, _price, _stock);
    }

    function placeOrder(
        OrderItem[] memory _items
    ) external payable nonReentrant {
        if (_items.length == 0) revert EmptyOrder();

        uint256 orderId = nextOrderId++;
        uint256 totalPrice = 0;

        Order storage newOrder = orders[orderId];
        newOrder.id = orderId;
        newOrder.buyer = payable(msg.sender);
        newOrder.status = OrderStatus.Paid;

        for (uint256 i = 0; i < _items.length; i++) {
            uint256 productId = _items[i].productId;
            uint256 quantity = _items[i].quantity;

            if (productId >= nextProductId) revert ProductNotExist();
            if (quantity == 0) revert InvalidQuantity();

            Product storage product = products[productId];
            if (!product.isActive) revert ProductNotActive();
            if (product.stock < quantity) revert InsufficientStock();

            uint256 itemPrice = product.price * quantity;
            totalPrice += itemPrice;
            product.stock -= quantity;

            newOrder.items.push(OrderItem(productId, quantity));

            emit OrderItemAdded(orderId, productId, quantity);
        }

        if (msg.value != totalPrice) revert IncorrectPayment();

        newOrder.totalPrice = totalPrice;

        emit OrderPlaced(orderId, msg.sender, totalPrice);
        emit OrderPaid(orderId);
    }

    function shipOrder(uint256 _orderId) external onlyOwner {
        Order storage order = orders[_orderId];
        if (order.status != OrderStatus.Paid) revert InvalidOrderStatus();

        order.status = OrderStatus.Shipped;
        emit OrderShipped(_orderId);
    }

    function deliverOrder(uint256 _orderId) external onlyOwner {
        Order storage order = orders[_orderId];
        if (order.status != OrderStatus.Shipped) revert InvalidOrderStatus();

        order.status = OrderStatus.Delivered;
        emit OrderDelivered(_orderId);
    }

    function cancelOrder(uint256 _orderId) external nonReentrant {
        Order storage order = orders[_orderId];
        if (order.buyer != msg.sender && owner() != msg.sender)
            revert Unauthorized();
        if (order.status != OrderStatus.Paid) revert InvalidOrderStatus();

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

    receive() external payable {
        // Allow the contract to receive ETH
    }
}

/* 
- make contract receive erc20 tokens
- pay with both eth and erc20
 */
