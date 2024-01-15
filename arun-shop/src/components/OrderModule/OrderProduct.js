// OrderProduct.js
import React, { useMemo, useState, useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import Category from "../Category";
import Caddy from "./Caddy";
import SearchBar from "./SearchBar";
import categoriesData from "./categories.json";
import "./Styling/OrderProduct.css";
import "./Styling/OrderProductCategory.css";
import "./Styling/SearchBar.css";
import CateTest from "../../pages/BackendTest/CateTest";
import {
  addCategory,
  getAllCategory,
  addCategoriesFromJson,
} from "../../services/Category";

const OrderProduct = () => {
  const initialCategories = useMemo(() => categoriesData.categories, []);
  const [filteredCategories, setFilteredCategories] =
    useState(initialCategories);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    // Load categories on component mount
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      const allCategories = await getAllCategory();

      if (allCategories) {
        console.log(allCategories);

        const formattedCategories = allCategories.map((category) => {
          // Customize the format based on your requirements
          return {
            name: category.name,
            color: category.color,
            filePath: category.filePath,
            image_url: category.image_url,
          };
        });
        //setFilteredCategories(formattedCategories);
      } else {
        // Handle error loading categories
      }
    } catch (error) {
      console.error("Error loading categories:", error);
      // Handle the error appropriately
    }
  };

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

  const handleCategoryFilter = (category) => {
    if (category === "") {
      setFilteredCategories(initialCategories);
    } else {
      const filtered = initialCategories.filter((cat) => cat.name === category);
      setFilteredCategories(filtered);
      setSelectedCategory(category);
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <button onClick={loadCategories}>GetCate</button>
      <button onClick={addCategoriesFromJson}>AddCate</button>

      <div className="order-dashboard">
        <div className="search-bar-wrapper">
          <SearchBar
            onSearch={handleSearch}
            categories={initialCategories.map((cat) => cat.name)}
            onCategoryFilter={handleCategoryFilter}
          />
        </div>
        <div className="category-wrapper">
          {initialCategories.map((category) => (
            <div
              key={category.name}
              className={`category-card ${
                selectedCategory === category.name ? "selected" : ""
              }`}
              onClick={() => handleCategoryFilter(category.name)}
            >
              {category.name}
            </div>
          ))}
        </div>
        {filteredCategories.map((category) => (
          <Category key={category.name} {...category} />
        ))}
        <Caddy />
      </div>
    </DndProvider>
  );
};

export default OrderProduct;
