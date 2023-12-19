// Order.js
import React, { useState } from 'react';

const OrderProduct = () => {
  const [orderItems, setOrderItems] = useState([]);

  return (
    <div>
      <h2>Your Order</h2>
      {orderItems.length === 0 ? (
        <p>Your order is empty. Start adding items!</p>
      ) : (
        <ul>
          {orderItems.map((item, index) => (
            <li key={index}>
              {item.productName} - ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
      )}
      {/* Assume you have a list of products to choose from */}
      <h3>Available Products</h3>
      <ul>
        <li>
          <button onClick={() => setOrderItems([...orderItems, { productName: 'Apple', price: 1.5 }])}>
            Add Apple
          </button>
        </li>
        <li>
          <button onClick={() => setOrderItems([...orderItems, { productName: 'Banana', price: 0.75 }])}>
            Add Banana
          </button>
        </li>
        <li>
          <button onClick={() => setOrderItems([...orderItems, { productName: 'Orange', price: 1.2 }])}>
            Add Orange
          </button>
        </li>
        {/* Add more products as needed */}
      </ul>
    </div>
  );
};

export default OrderProduct;
