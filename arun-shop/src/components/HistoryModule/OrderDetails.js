// OrderDetails.js
import React from "react";
import Product from "../Product";
const OrderDetails = ({ order }) => {
  return (
    <div className="order-details">
      <h2>Order Details - ID: {order.id}</h2>
      <p>Date: {order.date}</p>
      <p>Cash (USD): ${order.amount.toFixed(2)}</p>
      <p>Cash (Riel): {(order.amount * 4100).toFixed(0)}៛</p>
      <p>Method of Payment: {order.paymentMethod}</p>
      <h3>Products Bought:</h3>
    </div>
  );
};

export default OrderDetails;
