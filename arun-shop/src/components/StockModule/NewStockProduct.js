import React, { useState } from "react";
import "./Styling/StockProduct.css";
import cancel from "../../Resources/icons/cancel.svg";
import ListStock2 from "../HistoryModule/ListStock2";

function NewStockProduct({ onClose }) {
  const [selectedProduct, setSelectedProduct] = useState("");
  const [quantity, setQuantity] = useState(0);

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleAddToStock = (e) => {
    e.preventDefault();

    // Here, you would add the selected product and quantity to your stock
    // For now, just log the information to the console
    console.log("Selected Product:", selectedProduct);
    console.log("Quantity:", quantity);

    // Close the modal after adding to stock
    onClose();
  };

  return (
      <div className="content-full">
        <div>
          <button className="cancel-button" type="button" onClick={onClose}>
            <img id="cancel-img" src={cancel} alt="Cancel" />
          </button>
        </div>
        <div className="new_stock_product">
          <h2>New Stock Products</h2>
        </div>
        <form onSubmit={handleAddToStock}>
          <ListStock2 onSelectProduct={handleProductSelect} />
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={quantity}
            onChange={handleQuantityChange}
          />
          <div className="btn_product">
            <button className="select_product-btn" type="submit">
              Add to Stock
            </button>
          </div>
        </form>
      </div>  );
}

export default NewStockProduct;
