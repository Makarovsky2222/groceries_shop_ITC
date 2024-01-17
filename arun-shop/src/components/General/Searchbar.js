//Searchbar.js
import React from "react";
import './Searchbar.css';
import DropDown from "./DropDown";

const Searchbar = () => {
  
  return (
    <div className="filterWithSearchbar">

      {/* Filter categories */}
      <DropDown className="filter-container"/>
      

      {/* Search */}
      <form className="search-container" action=" ">
        <input type="text" id="searchInput" onkeyup="searchFunction()" placeholder="Search here" /> 

        <input type="submit" id="submitSearch" />

        
      </form>


      
    </div>
  );
};

export default Searchbar;