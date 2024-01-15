import React from 'react';
import './Styling/ProductDetail.css'
import imageCancel from '../../Resources/icons/cancel.svg'
import EditDeleteAction from './ActionButtons';
import FilterCategory from '../General/FilterCategory'
import { UploadImage } from './UploadImage';

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

            <FilterCategory className="ddd" />

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
