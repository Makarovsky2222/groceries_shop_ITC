// OrderProduct.js
import React, { useState, useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import Category from "../Category";
import Caddy from "./Caddy";
import SearchBar from "./SearchBar";
import "./Styling/OrderProduct.css";
import "./Styling/OrderProductCategory.css";
import "./Styling/SearchBar.css";
import { getAllCategory } from "../../services/Category";
import handleGetProducts from "../../pages/BackendTest/ProdTest";
import { getProductsByCategoryId } from "../../services/Product";

const OrderProduct = () => {
  const [allCategories, setAllCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      const fetchedCategories = await getAllCategory();

      if (fetchedCategories) {
        const formattedCategories = fetchedCategories.map((category) => {
          // Customize the format based on your requirements
          return {
            id: category.id,
            name: category.name,
            color: category.color,
            image_url: category.image_url,
          };
        });
        setAllCategories(formattedCategories);
        setFilteredCategories(formattedCategories);
      } else {
        // Handle error loading categories
      }
    } catch (error) {
      console.error("Error loading categories:", error);
      // Handle the error appropriately
    }
  };

  const handleSearch = async (searchTerm) => {
    const lowerCaseSearch = searchTerm.toLowerCase();
    const filtered = [];

    for (const category of allCategories) {
      try {
        const prods = await getProductsByCategoryId(category.id);
        const filteredProducts = prods.filter((product) =>
          product.name.toLowerCase().includes(lowerCaseSearch)
        );

        filtered.push({
          ...category,
          products: filteredProducts,
        });
      } catch (error) {
        console.error(
          `Error fetching products for category ${category.id}:`,
          error
        );
      }
    }

    setFilteredCategories(filtered);
    setSelectedCategory(null); // Reset selected category when searching
  };

  const handleCategoryFilter = (category) => {
    if (category === "") {
      setFilteredCategories(allCategories);
    } else {
      const filtered = allCategories.filter((cat) => cat.name === category);
      setFilteredCategories(filtered);
      setSelectedCategory(category);
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="order-dashboard">
        <div className="search-bar-wrapper">
          <SearchBar
            onSearch={handleSearch}
            categories={allCategories.map((cat) => cat.name)}
            onCategoryFilter={handleCategoryFilter}
          />
        </div>
        <div className="category-wrapper">
          {filteredCategories.map((category) => (
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
          <Category
            id={category.id}
            name={category.name}
            color={category.color}
          />
        ))}

        <Caddy />
      </div>
    </DndProvider>
  );
};

export default OrderProduct;
