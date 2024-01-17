import React from "react";
import './Styling/Liststock.css';
import Delete from "./Delete";

function Product({ id, dateTime, total, description }) {
  return (
    <div className="each-product">
      <div className="product-name-and-pf">
        <p id="product-id">#{id}</p>
      </div>
      <div id="date-time">{dateTime}</div>
      <p id="product-total">{total} product</p>
      <div id="product-description">${description}</div>
      <Delete />
    </div>
  );
}

function Liststock() {
  const products = [
    { id: "1214415", dateTime: "12/12/2013 11:28:00 PM", total: 21, description: "1,250" },
    // Add more products as needed
  ];

  return (
    <div>
      {products.map((product, index) => (
        <div key={index} className="action-on-product">
          <div className="product-container">
            <Product {...product} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Liststock;
