// Delete.js

import React from "react";
import "./Styling/Delete.css";
import imageDlt from "../../Resources/icons/delete.svg";

function Delete({ onDelete }) {
  return (
    <div className="delete">
      <button id="dlt-button" type="button" onClick={onDelete}>
        <img id="dlt-img" src={imageDlt} alt="Delete" />
      </button>
    </div>
  );
}

export default Delete;
