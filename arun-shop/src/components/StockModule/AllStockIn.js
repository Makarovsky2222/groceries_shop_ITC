import React from "react";
import './Styling/AllStockIn.css';


function AllStockIn() {
    return (
        <div>
            <div>
                <div className="name-list">
                    <h1 className="h1" >All In Stock</h1>
                </div >
                <div className="btn-create"><button data-bs-toggle="modal" data-bs-target=".content-full" className="btn" >NEW STOCK</button></div>
            </div>
        </div>
    );
  }

export default AllStockIn;