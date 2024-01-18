// OrderList.js
import React from "react";

const OrderList = ({ orders, onOrderClick, onSort }) => {
  return (
    <div className="order-list">
      <h2>Order List</h2>
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
              <td>{order.paymentMethod}</td>
              <td>${order.amount.toFixed(2)}</td>
              <td>{(order.amount * 4100).toFixed(0)}៛</td>
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
