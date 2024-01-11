// Receipt.js
import React from 'react';
import './Styling/Receipt.css';

const Receipt = ({ products, subtotal, onClose }) => {
  return (
    <div className="receipt-container">
      <div className="receipt-header">
        <h4>Order Details</h4>
        {/* Close button */}
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
      <ul className="receipt-list">
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - ${product.price.toFixed(2)}
          </li>
        ))}
      </ul>
      <div className="receipt-subtotal">
        Subtotal: ${subtotal.toFixed(2)}
      </div>
      <div className="receipt-thank-you">
        Thank you for your order!
      </div>
    </div>
  );
};

export default Receipt;
