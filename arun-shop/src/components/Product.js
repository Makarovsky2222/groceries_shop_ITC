// Product.js
import React from 'react';
import { useDrag } from 'react-dnd';
import { Card } from 'react-bootstrap';
import './Product.css';

const Product = (props) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'PRODUCT',
    item: { type: 'PRODUCT', product: props }, // Provide a type and product data
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className={`product ${isDragging ? 'dragging' : ''}`}
      style={{ opacity: isDragging ? 0.5 : 1, cursor: 'move' }}
    >
      <Card>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text className="price">Price: ${props.price}</Card.Text>
          {/* Add more details as needed */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
