// PaymentWindow.js
import React, { useState } from "react";
import "./Styling/PaymentWindow.css";

const PaymentWindow = ({ payableAmount, onClose, onComplete }) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("cash");
  const [paymentAmount, setPaymentAmount] = useState("");

  const handlePaymentMethodChange = (method) => {
    if ((method === 'mastercard' || method === 'visa') && payableAmount < 10) {
      alert('MasterCard and Visa are not available for payments under $10.');
    } else {
    setSelectedPaymentMethod(method);
    }
  };

  const handleSubmitOrder = () => {
    if (paymentAmount && parseFloat(paymentAmount) >= payableAmount) {
      onComplete(); 
    } else {
      console.log('Invalid payment amount. Please enter a valid amount.');
    }
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
            className={`payment-method ${
              selectedPaymentMethod === "visa" ? "selected" : ""
            }`}
            onClick={() => handlePaymentMethodChange("visa")}
          >
            <img src="/visa-logo.png" alt="VISA" />
          </button>

          <button
            className={`payment-method ${
              selectedPaymentMethod === "mastercard" ? "selected" : ""
            }`}
            onClick={() => handlePaymentMethodChange("mastercard")}
          >
            <img src="/mastercard-logo.png" alt="MasterCard" />
          </button>

          <button
            className={`payment-method ${
              selectedPaymentMethod === "cash" ? "selected" : ""
            }`}
            onClick={() => handlePaymentMethodChange("cash")}
          >
            <img src="/mastercard-logo.png" alt="Cash" />
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
