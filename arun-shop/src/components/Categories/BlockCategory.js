import React, { useState } from "react";
import "./Styling/BlockCategory.css";
import allproductimage from "../../Resources/products/categories/allProducts.png";
import vegimage from "../../Resources/products/categories/vegetables.png";
import fruitimage from "../../Resources/products/categories/fruits.png";
import ingreimage from "../../Resources/products/categories/ingredients.png";
import meatimage from "../../Resources/products/categories/meats.png";
import createimg from "../../Resources/products/categories/create.svg";

import RegisterCategory from "./RegisterCategory"; // Import the RegisterCategory component

function BlockCategory() {
  const [showRegisterCategory, setShowRegisterCategory] = useState(false);

  const handleNewCategoryClick = () => {
    setShowRegisterCategory(true);
  };

  return (
    <div className="categories-section">
      {/* Existing categories */}
      <div className="each-block">
        <img id="img" src={allproductimage} alt="All Products" />
        <p id="text">All Products</p>
      </div>

      <div className="veg-block">
        <img id="img" src={vegimage} />
        <p id="veg-text">Vegetables</p>
      </div>

      <div className="fruit-block">
        <img id="img" src={fruitimage} />
        <p id="veg-text">Fruits</p>
      </div>

      <div className="ingre-block">
        <img id="img" src={ingreimage} />
        <p id="veg-text">Ingredients</p>
      </div>

      <div className="meat-block">
        <img id="img" src={meatimage} />
        <p id="veg-text">Meats</p>
      </div>
      {/* New Category block */}
      <div className="new-block" onClick={handleNewCategoryClick}>
        <img id="img" src={createimg} alt="New Category" />
        <p id="veg-text">New Category</p>
      </div>

      {/* Conditionally render RegisterCategory component */}
      {showRegisterCategory && <RegisterCategory />}
    </div>
  );
}

export default BlockCategory;
