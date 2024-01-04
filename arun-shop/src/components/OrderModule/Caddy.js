// Caddy.js
import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { Card } from 'react-bootstrap';
import './Styling/Caddy.css'
const Caddy = () => {
  const [droppedProducts, setDroppedProducts] = useState([]);

  const [, drop] = useDrop({
    accept: 'PRODUCT',
    drop: (item) => {
      // Handle drop events here
      setDroppedProducts((prevProducts) => [...prevProducts, item.product]);
    },
  });

  return (
    <div ref={drop} className="caddy">
      <Card>
        <Card.Body>
          <Card.Title>Caddy</Card.Title>
          <Card.Text>Total Products: {droppedProducts.length}</Card.Text>
          {/* Display the dropped products or any other information */}
          {droppedProducts.map((product, index) => (
            <div key={index}>{product.name}</div>
          ))}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Caddy;
