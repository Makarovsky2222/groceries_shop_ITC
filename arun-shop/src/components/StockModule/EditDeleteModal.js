import React from "react";
import cancel from "../../Resources/icons/cancel.svg";
import imageDlt from "../../Resources/icons/delete.svg";
import "./EditDeleteModal.css"
function EditDeleteModal({ onClose, onDelete, title }) {
  const handleButtonClick = (action) => {
    if (action === "cancel") {
      onClose();
    } else if (action === "delete") {
      onDelete();
    }
  };

  return (
    <div>
      <div className="content-pop-up"> 
        <div>
          <div className="cancel">
            <button type="button" onClick={() => handleButtonClick("cancel")}>
              <img src={cancel} alt="Cancel" />
            </button>
          </div>
          <div className="select">
            <h2>{title}</h2>
          </div>
          <div className="hr"><hr/></div>
          <div>
            {/* Additional content for EditDeleteModal if needed */}
          </div>
          <div>
            {onDelete && (
              <div className="delete">
                <button type="button" onClick={() => handleButtonClick("delete")}>
                  <img src={imageDlt} alt="Delete" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditDeleteModal;
