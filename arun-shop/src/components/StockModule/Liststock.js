// ListStock.js

import React, { useState } from "react";
import "./Styling/Liststock.css";
import Delete from "./Delete";

function Product({ id, dateTime, total, description, onDelete }) {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="each-product">
      <div className="product-name-and-pf">
        <p id="product-id">#{id}</p>
      </div>
      <div id="date-time">{dateTime}</div>
      <p id="product-total">{total} product</p>
      <div id="product-description">${description}</div>
      <Delete onDelete={handleDelete} />
    </div>
  );
}

function Liststock() {
  const [products, setProducts] = useState([
    {
      id: "1214415",
      dateTime: "12/12/2013 11:28:00 PM",
      total: 21,
      description: "1,250",
    },
    // Add more products as needed
  ]);

  const handleDelete = (productId) => {
    // Remove the product with the given id from the products array
    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(updatedProducts);
  };

  return (
    <div>
      {products.map((product, index) => (
        <div key={index} className="action-on-product">
          <div className="product-container">
            <Product {...product} onDelete={handleDelete} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Liststock;
