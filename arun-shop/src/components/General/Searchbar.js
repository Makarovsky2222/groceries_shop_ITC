//Searchbar.js
import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import './Searchbar.css';

const DropdownFilter = () => {
  const categories = [
    'Vegetables',
    'Fruits',
    'Ingredients',
    'Meats',
    'Drinks',
  ];

  return (
    <div className="filterWithSearchbar">

      {/* Filter categories */}
      <Dropdown className="filter-container">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          FILTER CATEGORY 
          
        </Dropdown.Toggle>

        <Dropdown.Menu id="dropdown-menu">
          {categories.map((category, index) => (
            <Dropdown.Item href="#/action-1" key={index}> {category} </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      

      {/* Search */}
      <form className="search-container" action=" ">
        <input type="text" id="searchInput" onkeyup="searchFunction()" placeholder="Search here" /> 

        <input type="submit" id="submitSearch" />

        
      </form>


      
    </div>
  );
};

export default DropdownFilter;
