// LeftPanel.js
import React from "react";

const LeftPanel = ({ setOrderFormOpen, setCurrentView }) => (
  <div className="left-panel">
    <button onClick={() => setOrderFormOpen(true)}>New Order</button>
    <button onClick={() => setCurrentView("currentOrders")}>
      History
    </button>
  </div>
);

export default LeftPanel;
