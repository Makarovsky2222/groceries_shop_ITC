// SearchBar.js
import React, { useState } from "react";

const SearchBar = ({ onSearch, categories, onCategoryFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [, setSelectedCategory] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onCategoryFilter(category);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <div className="filter-category">
        <button className="filter-btn">Filter by Category</button>
        <div className="dropdown">
          <ul>
            <li onClick={() => handleCategoryChange("")}>All Categories</li>
            {categories.map((category) => (
              <li key={category} onClick={() => handleCategoryChange(category)}>
                {category}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
