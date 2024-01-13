import React from 'react';
import './Styling/ProductDetail.css'
import imageCancel from '../../Resources/icons/cancel.svg'
import EditDeleteAction from './ActionButtons';
import UploadAndDisplayImage from './UploadImage';
import FilterCategory from '../General/FilterCategory'
import BasicExample from '../General/DefultDropdown';


function ProductInfo() {

    return (

        <div className="control-section">

            <div className="header">
                <button id='cancel-button'>
                    <img id='imgCancel' src={imageCancel} />
                </button>

                <EditDeleteAction />      
            </div>

            <div className='image-container'>
                <UploadAndDisplayImage />
            </div>


            <div className='input-info'>
                <input id='product-name' type="text" placeholder="Name"></input>
            </div>

            <FilterCategory className="ddd" />
            
        </div>
    )



}

export default ProductInfo;
