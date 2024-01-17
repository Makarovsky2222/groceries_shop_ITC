import React from 'react';
import './Styling/RegisterCategory.css';
import imageCancel from '../../Resources/icons/cancel.svg';
import { UploadImage } from './UploadImage';


function RegisterCategory() {
    return (

        <div className="control-section">

            <div className='header'>
                <button id='cancel-button'>
                    <img id='imgCancel' src={imageCancel} />
                </button>
                <p id='registerText'>Category Registration</p>
            </div>

            <div className='image-container' >
                <UploadImage  />
            </div>

            <div className='input-info'>
                <input id='product-name' type="text" placeholder="Category Name"></input>
            </div>


            <button id='saveinfo-button'>
                SAVE
            </button>

        </div>

    )


}
export default RegisterCategory