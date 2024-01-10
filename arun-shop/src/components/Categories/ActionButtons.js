import React from "react";
import './ActionButtons.css'
import imageEdit from '../../Resources/icons/edit.svg'
import imageDlt from '../../Resources/icons/delete.svg'


function EditDeleteAction() {
    return (
        <div className="edit-delete">
                    <button id="edit-button" type="button" >
                        <img id="edit-img" src={imageEdit} />
                    </button>
                    <button id="dlt-button" type="button" >
                        <img id="dlt-img"  src={imageDlt} />
                    </button>
        </div>
    )
}

export default EditDeleteAction;