// Product.js
import React from 'react';
import './Product.css';

/**
 * Represents an individual grocery product.
 *
 * @param {Object} props - The properties of the Product component.
 * @param {string} props.name - The name of the product.
 * @param {number} props.price - The price of the product.
 * @returns {JSX.Element} - The Product component.
 */
const Product = (props) => {
  return (
    <div className="product">
      <h2>{props.name}</h2>
      <p className="price">Price: ${props.price}</p>
      {/* Add more details as needed */}
    </div>
  );
}

export default Product;
