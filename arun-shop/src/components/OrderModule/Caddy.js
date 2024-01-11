// Caddy.js
import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { Card, Button, Modal } from "react-bootstrap";
import Product from "../Product";
import Receipt from "./Receipt";
import PaymentWindow from "./PaymentWindow";
import "./Styling/Caddy.css";

const Caddy = () => {
  const [droppedProducts, setDroppedProducts] = useState([]);
  const [showReceipt, setShowReceipt] = useState(false);
  const [showPayment, setShowPayment] = useState(false);

  const [, drop] = useDrop({
    accept: "PRODUCT",
    drop: (item) => {
      setDroppedProducts((prevProducts) => [...prevProducts, item.product]);
    },
  });

  const subtotal = droppedProducts.reduce(
    (total, product) => total + product.price,
    0
  );

  const handleOrderSubmit = () => {
    if (droppedProducts.length > 0) {
      setShowPayment(true);
    } else {
      // Display a message or notification indicating that the caddy is empty
      console.log("Caddy is empty. Add products to proceed.");
    }
  };

  const handleCloseReceipt = () => {
    setDroppedProducts([]); // Reset the caddy
    setShowReceipt(false);
  };

  const handlePaymentComplete = () => {
    setShowPayment(false);
    setShowReceipt(true);
  };

  const handleClosePayment = () => {
    setShowPayment(false);
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
          <div className="subtotal">
            Subtotal: {subtotal.toFixed(2) * 4100} Riel
          </div>
          <Button
            disabled={droppedProducts.length === 0}
            variant="primary"
            onClick={handleOrderSubmit}
          >
            Proceed to Payment
          </Button>
        </Card.Body>
      </Card>

      {/* Payment Window */}
      {showPayment && (
        <PaymentWindow
          payableAmount={subtotal}
          onClose={handleClosePayment}
          onComplete={handlePaymentComplete}
        />
      )}

      {/* Receipt Modal */}
      <Modal show={showReceipt} onHide={handleCloseReceipt}>
        <Modal.Header closeButton>
          <Modal.Title>Receipt</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Receipt
            products={droppedProducts}
            subtotal={subtotal}
            onClose={handleCloseReceipt}
          />
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
