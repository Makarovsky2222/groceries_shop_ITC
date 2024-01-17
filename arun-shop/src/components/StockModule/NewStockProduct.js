import React from "react";
import "./Styling/StockProduct.css";
import cancel from "../../Resources/icons/cancel.svg";
import ListStock2 from "../HistoryModule/ListStock2";

function NewStockProduct() {
  return (
    <div>
      <div className="content-full">
        <div>
          <div>
            <button className="cancel-button" type="button">
              <img id="cancel-img" src={cancel} />
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
              <h2 >New Stock Products</h2>
            </div>
            <div className="btn_product">
              <button className="select_product-btn">Select Product</button>
            </div>
          </div>
          <div>
            <ListStock2 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewStockProduct;
