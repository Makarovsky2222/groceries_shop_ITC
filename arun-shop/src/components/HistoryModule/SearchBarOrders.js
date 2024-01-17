// SearchBarOrders.js
import React, { useState } from "react";

const SearchBarOrders = ({ onSearch, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [, setSelectedFilter] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    onFilter(filter);
  };

  return (
    <div className="search-bar-order">
      <input
        type="text"
        placeholder="Search orders..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <div className="filter-category">
        <button className="filter-btn">Filter by</button>
        {/* Customize the filter options based on your specific requirements */}
        <div className="dropdown">
          <ul>
            <li onClick={() => handleFilterChange("ID")}>ID</li>
            <li onClick={() => handleFilterChange("Date")}>Date (Latest/Newest)</li>
            <li onClick={() => handleFilterChange("Amount")}>Cash Amount</li>
            <li onClick={() => handleFilterChange("PaymentMethod")}>Payment Method</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchBarOrders;
