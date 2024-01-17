import React from "react";
import './Styling/EditStock.css'
import cancel from "../../Resources/icons/cancel.svg";



function EditStock() {
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
          <h2>Edit Stock</h2>
          </div>
            <div className="hr"><hr/></div>
            <div>
            </div>
            <div>
            </div>

        </div>
        </div>
    </div>
    )
}

export default EditStock;