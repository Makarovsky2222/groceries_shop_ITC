// OrderList.js
import React from "react";

const OrderList = ({ orders, onOrderClick, onSort }) => {
  return (
    <div className="order-list">
      <h2>Order List</h2>
      <button onClick={() => onSort("date")}>Sort by Date</button>
      <button onClick={() => onSort("amount")}>Sort by Amount</button>
      <button onClick={() => onSort("paymentMethod")}>
        Sort by Payment Method
      </button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Cash (USD)</th>
            <th>Cash (Riel)</th>
            <th>Payment Method</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} onClick={() => onOrderClick(order)}>
              <td>{order.id}</td>
              <td>{order.date}</td>
              <td>${order.amount.toFixed(2)}</td>
              <td>{(order.amount * 4100).toFixed(0)}៛</td>
              <td>{order.paymentMethod}</td>
              <td>
                <button>See Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
