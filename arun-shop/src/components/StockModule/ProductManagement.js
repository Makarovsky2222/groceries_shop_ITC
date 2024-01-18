import React, { useState } from "react";
import "./Styling/ProductManagement.css"; // Create this file for styling
import cancel from "../../Resources/icons/cancel.svg";
import ListStock2 from "../HistoryModule/ListStock2";
import SearchBar from "../General/Searchbar";
import ListProduct3 from "./ListProduct3";

function ProductManagement({ title, onSelect, onClose }) {
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
    console.log("Selected Product:", selectedProduct);
    console.log("Quantity:", quantity);
    onClose();
  };

  return (
    <div className="content-pop-up">
      <div>
        <div>
          <button className="cancel-button" type="button" onClick={onClose}>
            <img id="cancel-img" src={cancel} alt="Cancel" />
          </button>
        </div>
        <div>
          <div className="code">
            <h3>#1214415</h3>
            <div className="date">
              <h9>12/12/2023 11:28:00:PM</h9>
            </div>
          </div>
          <div className="total">
            <h3>$ 3205</h3>
            <div className="total-product">
              <h9>Total: 21</h9>
            </div>
          </div>
        </div>
        <div className="h2">
          <h2>{title}</h2>
        </div>
        {title === "Select Product" ? (
          <>
            <div className="hr">
              <hr />
            </div>
            <div>
              <SearchBar />
            </div>
            <div>
              <ListProduct3 onSelectProduct={onSelect} />
            </div>
          </>
        ) : (
          <ListStock2 />
        )}
        {title === "Select Product" && (
          <form onSubmit={handleAddToStock}>
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
        )}
      </div>
    </div>
  );
}

export default ProductManagement;
