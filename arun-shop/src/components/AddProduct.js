//AddProduct.js
import React from "react";
import './AddProduct.css'

function AddProduct() {
  function handleProductAdding() {
    alert("What should we add !");
  }
    return (
      <div className="add-product-container">
        <button className="add-product-button" onClick={handleProductAdding}>
      Add New Product
        </button>
      </div>
    );
  }

export default AddProduct;