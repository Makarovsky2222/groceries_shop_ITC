// HistoryPanel.js
import React from "react";

const HistoryPanel = ({ setOrderFormOpen, setCurrentView }) => (
  <div className="history-panel">
    <button onClick={() => setOrderFormOpen(true)}>New Order</button>
    <button onClick={() => setCurrentView("currentOrders")}>
      History
    </button>
  </div>
);

export default HistoryPanel;
