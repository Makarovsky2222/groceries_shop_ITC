import React from "react";
import "./Styling/ListStock2.css";
import EditDeleteAction from "../Categories/ActionButtons";

const products = [
  {
    id: 1,
    imageSrc:
      "https://i5.walmartimages.com/seo/Fresh-Slicing-Tomato-Each_a1e8e44a-2b82-48ab-9c09-b68420f6954c.04f6e0e87807fc5457f57e3ec0770061.jpeg",
    name: "Tomato Aussie",
    category: "Vegetables",
    amount: "40 Kg",
    price: "$ 10.00",
    totalPrice: "$ 400.00",
  },
  // Add more products as needed
];

function ListStock2() {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id} className="action-on-product">
          <div className="pop-it-product-container">
            <div className="each-product">
              <div className="product-name-and-pf">
                <img id="product-img" src={product.imageSrc} alt="Product" />
                <p id="product-name">{product.name}</p>
              </div>
              <div id="product-category">{product.category}</div>
              <p id="product-amout">{product.amount}</p>
              <div id="product-price">{product.price}</div>
              <p id="product-price-total">{product.totalPrice}</p>
            </div>
            <div className="edit-delete">
              <EditDeleteAction />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListStock2;
