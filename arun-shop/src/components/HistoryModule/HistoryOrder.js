// HistoryOrder.js
import React from "react";
import OrderManagement from "./OrderManagement";
import FinancialReport from "./FinancialReport";
import './Styling/HistoryOrder.css';

const HistoryOrder = () => {
  // Initial data with more orders and products
  const initialOrders = [
    {
      id: "1",
      date: "12/25/2023",
      amount: 150.0,
      paymentMethod: "Cash",
      products: [
        { id: "1", name: "Product A", price: 20.0 },
        { id: "2", name: "Product B", price: 30.0 },
      ],
    },
    {
      id: "2",
      date: "12/26/2023",
      amount: 200.0,
      paymentMethod: "Credit Card",
      products: [
        { id: "3", name: "Product C", price: 25.0 },
        { id: "4", name: "Product D", price: 15.0 },
      ],
    },
    // ... additional orders
  ];

  return (
    <div className="history-order">
      <OrderManagement orders={initialOrders} />
      <FinancialReport orders={initialOrders} />
    </div>
  );
};

export default HistoryOrder;
