import React, { useState } from "react";
import "./Styling/PaymentWindow.css";
import { useOrderContext } from "../HistoryModule/OrderContext";

const PaymentWindow = ({ payableAmount, onClose, onComplete, selectedProducts }) => {
  const { addOrderToHistory } = useOrderContext();
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

      const newOrder = {
        id: Date.now().toString(),
        date: new Date().toLocaleDateString(),
        amount: parseFloat(paymentAmount),
        paymentMethod: selectedPaymentMethod,
        products: selectedProducts,
      }
      console.log(newOrder);

      onComplete();
      addOrderToHistory(newOrder);
    } else {
      console.error('Invalid payment amount. Please enter a valid amount.');
    }
  };

  const createOrder = () => {
    const orderid = ""

  }

  return (
    <div className="payment-window">
      <div className="payment-header">
        <div className="payment-title">PAYABLE AMOUNT</div>
        <div className="payment-amount">${payableAmount.toFixed(2)}</div>
      </div>
      <div className="payment-content">
        <div className="payment-methods">
          {["visa", "mastercard", "cash"].map((method) => (
            <button
              key={method}
              className={`payment-method ${
                selectedPaymentMethod === method ? "selected" : ""
              }`}
              onClick={() => handlePaymentMethodChange(method)}
            >
              <img src={`/${method}-logo.png`} alt={method} />
            </button>
          ))}
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
