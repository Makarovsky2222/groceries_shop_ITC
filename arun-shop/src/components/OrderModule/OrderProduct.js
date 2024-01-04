import React, { useMemo, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import Category from "../Category";
import Caddy from "./Caddy";
import SearchBar from "./SearchBar";
import categoriesData from "./categories.json";
import "./Styling/OrderProduct.css";
import "./Styling/OrderProductCategory.css"

const OrderProduct = () => {
  const initialCategories = useMemo(() => categoriesData.categories, []);
  const [filteredCategories, setFilteredCategories] = useState(initialCategories);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSearch = (searchTerm) => {
    const filtered = initialCategories.filter((category) => {
      const lowerCaseSearch = searchTerm.toLowerCase();
      return category.products.some((product) =>
        product.name.toLowerCase().includes(lowerCaseSearch)
      );
    });
    setFilteredCategories(filtered);
    setSelectedCategory(null); // Reset selected category when searching
  };

  const handleCategoryClick = (categoryName) => {
    const clickedCategory = initialCategories.find((category) => category.categoryName === categoryName);
    if (clickedCategory) {
      setFilteredCategories([clickedCategory]);
      setSelectedCategory(clickedCategory.categoryName);
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="order-dashboard">
        <div className="search-bar-wrapper">
          <SearchBar onSearch={handleSearch} />
        </div>
        <div className="category-wrapper">
          {initialCategories.map((category) => (
            <div
              key={category.categoryName}
              className={`category-card ${selectedCategory === category.categoryName ? "selected" : ""}`}
              onClick={() => handleCategoryClick(category.categoryName)}
            >
              {category.categoryName}
            </div>
          ))}
        </div>
        {filteredCategories.map((category) => (
          <Category key={category.categoryName} {...category} />
        ))}
        <Caddy />
      </div>
    </DndProvider>
  );
};

export default OrderProduct;
