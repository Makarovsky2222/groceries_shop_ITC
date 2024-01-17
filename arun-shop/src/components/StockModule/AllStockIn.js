import React, { useState } from "react";
import "./Styling/AllStockIn.css";
import NewStockProduct from "../StockModule/NewStockProduct";

const AllStockIn = () => {
  const [showNewStockModal, setShowNewStockModal] = useState(false);

  const handleNewStockClick = () => {
    setShowNewStockModal(true);
  };

  const handleCloseNewStockModal = () => {
    setShowNewStockModal(false);
  };

  return (
    <div>
      <div className="name-list">
        <h1 className="h1">All In Stock</h1>
      </div>
      <div className="btn-create">
        <button onClick={handleNewStockClick} className="btn">
          NEW STOCK
        </button>
      </div>
      {showNewStockModal && (
        <NewStockProduct onClose={handleCloseNewStockModal} />
      )}
    </div>
  );
};

export default AllStockIn;
