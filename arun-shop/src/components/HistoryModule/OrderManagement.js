// OrderManagement.js
import React, { useState } from "react";
import OrderList from "./OrderList";
import OrderDetails from "./OrderDetails";
import './Styling/HistoryOrder.css';

const OrderManagement = ({ orders }) => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [sortedOrders, setSortedOrders] = useState(orders);

  const handleOrderClick = (order) => {
    setSelectedOrder(order);
  };

  const handleDeleteOrder = (orderId) => {
    const updatedOrders = orders.filter((order) => order.id !== orderId);
    setSortedOrders(updatedOrders);
    setSelectedOrder(null);
    // Add logic for updating orders in the database
  };

  const handleSort = (columnName) => {
    const sortedOrdersCopy = [...sortedOrders].sort((a, b) => {
      switch (columnName) {
        case "date":
          return new Date(a.date) - new Date(b.date);
        case "amount":
          return a.amount - b.amount;
        case "paymentMethod":
          return a.paymentMethod.localeCompare(b.paymentMethod);
        default:
          return 0;
      }
    });

    setSortedOrders(sortedOrdersCopy);
  };

  return (
    <div className="order-management">
      <OrderList
        orders={sortedOrders}
        onOrderClick={handleOrderClick}
        onSort={handleSort}
      />
      {selectedOrder && (
        <div>
          <button onClick={() => setSelectedOrder(null)}>Back to List</button>
          <button onClick={() => handleDeleteOrder(selectedOrder.id)}>
            Delete Order
          </button>
          <OrderDetails order={selectedOrder} />
        </div>
      )}
    </div>
  );
};

export default OrderManagement;
