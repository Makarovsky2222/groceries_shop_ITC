import React from 'react';
import './Styling/PreviewContent.css'
import imageCancel from '../../Resources/icons/cancel.svg'
// import { UploadImage } from './UploadImage';


function PreviewContent() {

    return (
        <div className="control-section">

            <div className='header'>
                <img src={imageCancel} />
                <p id='registerText'>Profile</p>
            </div>

            {/* <div className='image-container' >
                <UploadImage  />
            </div> */}


            <div className='long-container'>
                <p id='inputlong-text' type="text">
                    Strawie
                </p>
            </div>

            <div className='short-container'>
                <p id='inputshort-text' type="text" >
                    Chhor
                </p>
                <p id='inputshort-text' type="text" >
                    Daphea
                </p>
            </div>

            <div className='long-container'>
                <p id='inputlong-text' type="text" >
                    sophartchhordaphea@gmail.com
                </p>
            </div>

            <div className='long-container'>
                <p id='inputlong-text' type="text" >
                    070884241
                </p>
            </div>
           


            <button id='edit-button'>
                EDIT
            </button>
            
        </div>
    )



}

export default PreviewContent;
