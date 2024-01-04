// OrderProduct.js
import React, { useMemo, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import Category from "../Category";
import Caddy from "./Caddy";
import SearchBar from "./SearchBar";  // Import the new SearchBar component
import categoriesData from "./categories.json";
import "./Styling/OrderProduct.css";
import "./Styling/SearchBar.css"

const OrderProduct = () => {
  const initialCategories = useMemo(() => categoriesData.categories, []);
  const [filteredCategories, setFilteredCategories] = useState(initialCategories);

  const handleSearch = (searchTerm) => {
    const filtered = initialCategories.filter((category) => {
      const lowerCaseSearch = searchTerm.toLowerCase();
      return category.products.some((product) =>
        product.name.toLowerCase().includes(lowerCaseSearch)
      );
    });
    setFilteredCategories(filtered);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="order-dashboard">
        <div className="search-bar">
         <SearchBar onSearch={handleSearch} />
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
