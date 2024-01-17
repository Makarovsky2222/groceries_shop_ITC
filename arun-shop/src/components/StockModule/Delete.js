import React from "react";
import './Styling/Delete.css'
import imageEdit from '../../Resources/icons/edit.svg'
import imageDlt from '../../Resources/icons/delete.svg'


function Delete() {
    return (
        <div className="delete">
                    <button id="dlt-button" type="button" >
                        <img id="dlt-img"  src={imageDlt} />
                    </button>
        </div>
    )
}

export default Delete;