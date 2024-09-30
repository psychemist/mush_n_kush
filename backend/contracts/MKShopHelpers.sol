// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

contract MKShopHelpers {
    // Custom Errors
    error EmptyName();
    error EmptyOrder();
    error PaymentFailed();
    error IncorrectPayment();
    error InsufficientBalance();
    error InsufficientStock();
    error InvalidOrderStatus();
    error InvalidPrice();
    error InvalidQuantity();
    error ProductDoesNotExist();
    error ProductNotActive();
    error UnauthorizedSender();
    error ZeroAddressDetected();

    // Custom Events
    event ProductAdded(
        uint256 indexed productId,
        address seller,
        string name,
        uint256 price,
        uint256 stock
    );
    event ProductUpdated(
        uint256 indexed productId,
        string name,
        uint256 price,
        uint256 stock,
        bool isActive
    );
    event OrderPlaced(
        uint256 indexed orderId,
        address indexed buyer,
        uint256 totalPrice
    );
    event OrderCancelled(uint256 indexed orderId);
    event OrderShipped(uint256 indexed orderId, address shipper);
    event OrderDelivered(uint256 indexed orderId);
    event OrderFulfilled(uint256 indexed orderId);
    event PaymentDistributed(address indexed recipient, uint256 amount);

    // Internal functions
    function performSanityCheck() internal view {
        if (msg.sender == address(0)) revert ZeroAddressDetected();
    }
}
