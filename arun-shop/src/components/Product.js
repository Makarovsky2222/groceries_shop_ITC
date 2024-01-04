// Product.js
import React from 'react';
import { useDrag } from 'react-dnd';
import { useDrop } from 'react-dnd';
import { Card } from 'react-bootstrap';
import './Product.css';

const Product = (props) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'PRODUCT',
    item: { product: props },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: 'PRODUCT',
    hover: () => {
      // Handle hover events here, you can add some styles or effects
      console.log('Card is being hovered!');
    },
  });

  return (
    <div
      ref={(node) => drag(drop(node))}
      className={`product ${isDragging ? 'dragging' : ''}`}
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
