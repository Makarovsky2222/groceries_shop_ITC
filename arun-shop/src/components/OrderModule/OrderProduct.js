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
import { getAllCategory } from "../../services/Category";
import handleGetProducts from "../../pages/BackendTest/ProdTest"
import { getProductsByCategoryId } from "../../services/Product";

const OrderProduct = () => {
  
  // const initialCategories = useMemo(() => getAllCategory(), []);
  const [filteredCategories, setFilteredCategories] =
    useState();
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      const allCategories = await getAllCategory();

      if (allCategories) {

        const formattedCategories = allCategories.map((category) => {
          // Customize the format based on your requirements
          return {
            id: category.id,
            name: category.name,
            color: category.color,
            image_url: category.image_url,
          };
        });
        setFilteredCategories(formattedCategories);
      } else {
        // Handle error loading categories
      }
    } catch (error) {
      console.error("Error loading categories:", error);
      // Handle the error appropriately
    }
  };

  const handleSearch = (searchTerm) => {
    const filtered = filteredCategories.filter((category) => {
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
      setFilteredCategories(filteredCategories);
    } else {
      const filtered = filteredCategories.filter((cat) => cat.name === category);
      setFilteredCategories(filtered);
      setSelectedCategory(category);
    }
  };


  return (
    <DndProvider backend={HTML5Backend}>
      <div className="order-dashboard">
        {/* <div className="search-bar-wrapper">
          <SearchBar
            onSearch={handleSearch}
            categories={filteredCategories?.map((cat) => cat.name)}
            onCategoryFilter={handleCategoryFilter}
          />
        </div> */}
        <div className="category-wrapper">
          {filteredCategories?.map((category) => (
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
        {filteredCategories?.map((category) => (
          <Category id={category.id}
          name={category.name} 
          color={category.color} />
        ))}

        <Caddy />
      </div>
      <button onClick={handleGetProducts}>Get Products</button>
    </DndProvider>
  );
};

export default OrderProduct;
