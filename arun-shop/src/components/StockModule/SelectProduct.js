import React from "react";
import "./Styling/StockProduct.css";
import cancel from "../../Resources/icons/cancel.svg";
import SearchBar from "../General/Searchbar";
import ListProduct3 from "./ListProduct3";
function SelectProduct() {
  return (
    <div>
      <div className="content-pop-up"> 
        <div>
          <div className="cancel">
                <button className="cancel-button" type="button">
                <img id="cancel-img" src={cancel} />
                </button>
                
          </div>
          <div className="select">
          <h2>Select Product</h2>
          </div>
            <div className="hr"><hr/></div>
            <div>
              <SearchBar/>
            </div>
            <div>
                <ListProduct3/>
            </div>

        </div>
      </div>
    </div>
  );
}

export default SelectProduct;
