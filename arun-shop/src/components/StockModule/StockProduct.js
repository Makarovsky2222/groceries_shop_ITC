import React from "react";
import "./Styling/SelectProduct.css"
import cancel from "../../Resources/icons/cancel.svg";
import ListStock2 from "../HistoryModule/ListStock2";

function StockProduct() {
  return (
    <div>
      <div className="content-pop-up"> 
        <div>
          <div>
                <button className="cancel-button" type="button">
                <img id="cancel-img" src={cancel} />
                </button>
          </div>
          <div>
                <div className="code">
                <h3>#1214415</h3>
                <div className="date"><h9>12/12/2023 11:28:00:PM</h9></div>

                </div>
                <div className="total">
                <h3>$ 3205</h3>
                <div className="total-product"><h9>Total: 21</h9></div>

                </div>
          </div>
            <div className="h2">
                <h2>
                    Stock Products
                </h2>
            </div>
            <div>
                <ListStock2/>
            </div>

        </div>
      </div>
    </div>
  );
}

export default StockProduct;
