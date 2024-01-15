// Category.js
import React from 'react';
import Product from './Product';
import { Card } from 'react-bootstrap';
import './Category.css';

const Category = (props) => {
  const { id, name, color, products } = props;

  return (
    <Card className="category">
      <Card.Header as="h2" style={{ backgroundColor : color}}>{name}</Card.Header>
      <Card.Body>
        <div className="products-container">
          {products.map((product, index) => (
            <Product key={index} {...product} />
          ))}
        </div>
      </Card.Body>
    </Card>
  );
}

export default Category;
