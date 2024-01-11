// PaymentWindow.js
import React, { useState } from 'react';
import './Styling/PaymentWindow.css';

const PaymentWindow = ({ payableAmount, onClose, onComplete }) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('visa');
  const [paymentAmount, setPaymentAmount] = useState('');

  const handlePaymentMethodChange = (method) => {
    setSelectedPaymentMethod(method);
  };

  const handleSubmitOrder = () => {
    // Perform any order submission logic here
    // You can also include validation before completing the payment
    onComplete(); // Close the payment window and show the receipt
  };

  return (
    <div className="payment-window">
      <div className="payment-header">
        <div className="payment-title">PAYABLE AMOUNT</div>
        <div className="payment-amount">${payableAmount.toFixed(2)}</div>
      </div>
      <div className="payment-content">
        <div className="payment-methods">
          <button
            className={`payment-method ${selectedPaymentMethod === 'visa' ? 'selected' : ''}`}
            onClick={() => handlePaymentMethodChange('visa')}
          >
            <img src="/visa-logo.png" alt="VISA" />
          </button>
          {/* Add similar buttons for other payment methods */}
        </div>
        <div className="payment-input">
          <input
            type="text"
            placeholder="Enter amount..."
            value={paymentAmount}
            onChange={(e) => setPaymentAmount(e.target.value)}
          />
        </div>
      </div>
      <div className="payment-footer">
        <div className="payment-total">Total: ${payableAmount.toFixed(2)}</div>
        <button className="payment-close" onClick={onClose}>
          Close
        </button>
        <button className="payment-submit-order" onClick={handleSubmitOrder}>
          Submit Order
        </button>
      </div>
    </div>
  );
};

export default PaymentWindow;
