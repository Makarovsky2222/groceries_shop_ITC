import React, { useState } from "react";
import "./Styling/StockProduct.css";
import cancel from "../../Resources/icons/cancel.svg";
import ListStock2 from "../HistoryModule/ListStock2";

function NewStockProduct() {
  const [selectedProduct, setSelectedProduct] = useState("");
  const [quantity, setQuantity] = useState(0);

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleAddToStock = () => {
    // Here, you would add the selected product and quantity to your stock
    // For now, just log the information to the console
    console.log("Selected Product:", selectedProduct);
    console.log("Quantity:", quantity);
  };

  return (
    <div>
      <div className="content-full">
        <div>
          <div>
            <button className="cancel-button" type="button">
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
          <div className="">
            <div className="new_stock_product">
              <h2>New Stock Products</h2>
            </div>
            <div className="btn_product">
              <button className="select_product-btn" onClick={handleAddToStock}>
                Add to Stock
              </button>
            </div>
          </div>
          <div>
            <ListStock2 onSelectProduct={handleProductSelect} />
          </div>
          <div>
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={quantity}
              onChange={handleQuantityChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewStockProduct;
