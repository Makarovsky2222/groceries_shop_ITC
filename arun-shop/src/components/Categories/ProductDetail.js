import React from 'react';
import './Styling/ProductDetail.css'
import imageCancel from '../../Resources/icons/cancel.svg'
import EditDeleteAction from './ActionButtons';
import { UploadImage } from './UploadImage';
import { FilterCategory2 } from './FilterCategory2';


function ProductInfo() {

    return (
        <div className="control-section">

            <div className="header">
                <button id='cancel-button'>
                    <img id='imgCancel' src={imageCancel} />
                </button>

                <EditDeleteAction />      
            </div>

            <div className='image-container' >

                <UploadImage  />

            </div>


            <div className='input-info'>
                <input id='product-name' type="text" placeholder="Name"></input>
            </div>

            <div className='categoryAndAmount'>
                <FilterCategory2 />
                <input id='pricetax' type="number" placeholder="Amount"></input>
            </div>

            <div className='priceAndtax'>
                <input id='pricetax' type="number" placeholder="Price                                           ($)"></input>
                <input id='pricetax' type="number" placeholder="Tax                                            (%)"></input>
            </div>

            <textarea className='description-container' placeholder=' Description' rows="5" cols="50">
                
            </textarea>


            <button id='saveinfo-button'>
                SAVE
            </button>
            
        </div>
    )



}

export default ProductInfo;
