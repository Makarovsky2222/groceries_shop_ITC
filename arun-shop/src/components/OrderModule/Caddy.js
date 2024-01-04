import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { Card, Button, Modal } from 'react-bootstrap';
import Product from '../Product'; // Import the updated Product component
import './Styling/Caddy.css';
import Receipt from './Receipt'; // Import the new Receipt component

const Caddy = () => {
  const [droppedProducts, setDroppedProducts] = useState([]);
  const [showReceipt, setShowReceipt] = useState(false);

  const [, drop] = useDrop({
    accept: 'PRODUCT',
    drop: (item) => {
      setDroppedProducts((prevProducts) => [...prevProducts, item.product]);
    },
  });

  const subtotal = droppedProducts.reduce(
    (total, product) => total + product.price,
    0
  );

  const handleOrderSubmit = () => {
    setShowReceipt(true);
  };

  const handleCloseReceipt = () => {
    setShowReceipt(false);
  };

  return (
    <div ref={drop} className="caddy">
      <Card>
        <Card.Body>
          <Card.Title>Caddy</Card.Title>
          <div className="product-list">
            {droppedProducts.map((product, index) => (
              <Product key={index} {...product} />
            ))}
          </div>
          <hr />
          <div className="subtotal">Subtotal: {subtotal.toFixed(2)} $</div>
          <div className="subtotal">Subtotal: {subtotal.toFixed(2) * 4100} Riel</div>
          <Button variant="primary" onClick={handleOrderSubmit}>
            Submit Order
          </Button>
        </Card.Body>
      </Card>

      {/* Receipt Modal */}
      <Modal show={showReceipt} onHide={handleCloseReceipt}>
        <Modal.Header closeButton>
          <Modal.Title>Receipt</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Receipt products={droppedProducts} subtotal={subtotal} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseReceipt}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Caddy;
