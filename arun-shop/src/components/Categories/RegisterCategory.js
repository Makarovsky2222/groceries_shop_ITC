import React, { useState } from "react";
import "./Styling/RegisterCategory.css";
import imageCancel from "../../Resources/icons/cancel.svg";
import { UploadImage } from "./UploadImage";

function RegisterCategory() {
  const [newCategory, setNewCategory] = useState("");

  const handleCategoryNameChange = (event) => {
    setNewCategory(event.target.value);
  };

  const handleSaveCategory = () => {
    // TODO: Add logic to save the new category (e.g., make an API call or update state)
    console.log("Saving category:", newCategory);
    // Clear the input after saving
    setNewCategory("");
  };

  return (
    <div className="control-section">
      <div className="header">
        <button id="cancel-button">
          <img id="imgCancel" src={imageCancel} alt="Cancel" />
        </button>
        <p id="registerText">Category Registration</p>
      </div>

      <div className="image-container">
        <UploadImage />
      </div>

      <div className="input-info">
        <input
          id="product-name"
          type="text"
          placeholder="Category Name"
          value={newCategory}
          onChange={handleCategoryNameChange}
        />
      </div>

      <button id="saveinfo-button" onClick={handleSaveCategory}>
        SAVE
      </button>
    </div>
  );
}

export default RegisterCategory;
