// OrderDetails.js
import React from "react";

const OrderDetails = ({ order }) => {
  return (
    <div className="order-details">
      <h2>Order Details - ID: {order.id}</h2>
      <p>Date: {order.date}</p>
      <p>Cash (USD): ${order.amount.toFixed(2)}</p>
      <p>Cash (Riel): {(order.amount * 4100).toFixed(0)}៛</p>
      <p>Method of Payment: {order.paymentMethod}</p>
      <h3>Products Bought:</h3>
      <ul className="product-list">
        {order.products.map((product) => (
          <li key={product.name} className="product-item">
            <div className="product-info">
              <p className="product-name">{product.name}</p>
              <p className="product-price">
                Price: ${product.price.toFixed(2)}
              </p>
              <p className="product-amount">Amount: {product.amount}</p>
              <p className="product-category">
                Category ID: {product.category_id}
              </p>
              <p className="product-tax">Tax: {product.tax}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderDetails;
