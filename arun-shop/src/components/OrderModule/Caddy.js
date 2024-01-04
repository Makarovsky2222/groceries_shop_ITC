// Caddy.js
import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { Card } from 'react-bootstrap';
import Product from '../Product'; // Import the updated Product component
import './Styling/Caddy.css';

const Caddy = () => {
  const [droppedProducts, setDroppedProducts] = useState([]);

  const [, drop] = useDrop({
    accept: 'PRODUCT',
    drop: (item) => {
      setDroppedProducts((prevProducts) => [...prevProducts, item.product]);
    },
  });

  // Calculate subtotal of prices
  const subtotal = droppedProducts.reduce(
    (total, product) => total + product.price,
    0
  );

  return (
    <div ref={drop} className="caddy">
      <Card>
        <Card.Body>
          <Card.Title>Caddy</Card.Title>
          <div className="product-list">
            {droppedProducts.map((product, index) => (
              <Product key={index} {...product} /> // Use the updated Product component
            ))}
          </div>
          <hr />
          <div className="subtotal">Subtotal: ${subtotal.toFixed(2)}</div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Caddy;
