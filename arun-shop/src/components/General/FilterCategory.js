import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import './Styling/FilterCategory.css';

const FilterCategory = () => {
  const categories = [
    'Vegetables',
    'Fruits',
    'Ingredients',
    'Meats',
    'Drinks',
  ];

  return (
    <Dropdown className="filter-container">
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Vegetables
      </Dropdown.Toggle>

      <Dropdown.Menu id="dropdown-menu">
        {categories.map((category, index) => (
          <Dropdown.Item key={index}> {category} </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default FilterCategory;

