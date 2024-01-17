import React, { useState } from "react";
import './Styling/FilterCategory.css';

export function FilterCategory2() {
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [filterCategory, setFilterCategory] = useState('');


  const toggleDropdown = (category) => {
    setIsDropdownOpen(!isDropdownOpen);
    setFilterCategory(category);
 };

  return (
    <div className="dropdown" >
      <button className="dropdown-button" name="Select Category" onClick={() => toggleDropdown('')} >  
        <p>{filterCategory}</p>
      </button>
      
      {isDropdownOpen && (
        <div className="dropdown-menu">
          <a id="dropdown-item" href="#" onClick={() => toggleDropdown('Vegetables')}>Vegetables</a>
          <a id="dropdown-item" href="#" onClick={() => toggleDropdown('Fruits')}>Fruits</a>
          <a id="dropdown-item" href="#" onClick={() => toggleDropdown('Ingredients')}>Ingredients</a>
          <a id="dropdown-item" href="#" onClick={() => toggleDropdown('Meats')}>Meats</a>
          <a id="dropdown-item" href="#" onClick={() => toggleDropdown('Drinks')}>Drinks</a>
        </div>
      )}
      {/* <p>{filterCategory}</p> */}

    </div>
  );
}

