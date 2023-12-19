// Product.js
import React from 'react';
import { Card } from 'react-bootstrap';
import './Product.css';

const Product = (props) => {
  return (
    <Card className="product">
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text className="price">Price: ${props.price}</Card.Text>
        {/* Add more details as needed */}
      </Card.Body>
    </Card>
  );
}

export default Product;
