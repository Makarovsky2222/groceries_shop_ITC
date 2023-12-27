// OrderList.js
import React from "react";

const OrderList = ({ currentView, orders, filterAndSortOrders }) => (
  <div className="order-list-container">
    <h2>
      {currentView === "currentOrders" ? "Current" : "Completed"} Orders
    </h2>
    {["Amount", "Date", "Author", "Status"].map((option) => (
      <button key={option} onClick={() => filterAndSortOrders(option)}>
        Sort by {option}
      </button>
    ))}
    {/* Order list table */}
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Date</th>
          <th>Author</th>
          <th>Location</th>
          <th>Amount ($)</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order.id}>
            <td>{order.id}</td>
            <td>{order.name}</td>
            <td>{order.date}</td>
            <td>{order.author}</td>
            <td>{order.location}</td>
            <td>{order.amount}</td>
            <td>{order.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default OrderList;
