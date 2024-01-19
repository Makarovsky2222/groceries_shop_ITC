// EditDeleteAction.js
import React from "react";
import PropTypes from "prop-types";
import './Styling/ActionButtons.css';
import imageEdit from '../../Resources/icons/edit.svg';
import imageDlt from '../../Resources/icons/delete.svg';

function EditDeleteAction({ onEdit, onDelete }) {
  return (
    <div className="edit-delete">
      <button id="edit-button" type="button" onClick={onEdit}>
        <img id="edit-img" src={imageEdit} alt="Edit" />
      </button>
      <button id="dlt-button" type="button" onClick={onDelete}>
        <img id="dlt-img" src={imageDlt} alt="Delete" />
      </button>
    </div>
  );
}

EditDeleteAction.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default EditDeleteAction;
