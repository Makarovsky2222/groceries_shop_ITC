// Category.js
import React from 'react';
import Product from './Product';
import './Category.css';

/**
 * Represents a category of grocery products.
 *
 * @param {Object} props - The properties of the Category component.
 * @param {string} props.categoryName - The name of the category.
 * @param {Array} props.products - An array of products in the category.
 * @returns {JSX.Element} - The Category component.
 */
const Category = (props) => {
  const { categoryName, products } = props;

  return (
    <div className="category">
      <h2>{categoryName}</h2>
      <div className="products-container">
        {products.map((product, index) => (
          <Product key={index} {...product} />
        ))}
      </div>
    </div>
  );
}

export default Category;
