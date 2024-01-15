import React from "react";
import './Styling/ConfirmDelete.css'

function DeleteProduct() {
    return (

        <div className="delete-product-container">
            <div className="header">
                Delete Product
            </div>

            <p className="confirm-text"> Do you want to delete this product? </p>

            <div className="choices-button">
                <button id="cancel-button">
                    Cancel
                </button>

                <button id="delete-button">
                    Delete
                </button>
            </div>

        </div>        


    )
}

export default DeleteProduct;
