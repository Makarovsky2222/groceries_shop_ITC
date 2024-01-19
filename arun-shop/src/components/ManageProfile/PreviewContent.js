import React, { useEffect, useState } from 'react';
import './Styling/PreviewContent.css'
import imageCancel from '../../Resources/icons/cancel.svg'
// import { UploadImage } from './UploadImage';
import { getMe,  } from "../../services/UserServices"
import { getUserID } from '../../services/Authentication'


function PreviewContent() {

    const [user, setUser] = useState()
    useEffect(() => {

        const loadUser = async () => {
            const uid = getUserID()
            const user =  await getMe(uid)
            setUser(user)
        }
        loadUser()
    })

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
                    {user?.username}
                </p>
            </div>

            <div className='short-container'>
                <p id='inputshort-text' type="text" >
                    {user?.firstname}
                </p>
                <p id='inputshort-text' type="text" >
                {user?.lastname}
                </p>
            </div>

            <div className='long-container'>
                <p id='inputlong-text' type="text" >
                {user?.email}
                </p>
            </div>

            <div className='long-container'>
                <p id='inputlong-text' type="text" >
                {user?.phone_number}
                </p>
            </div>
           


            <button id='edit-button'>
                EDIT
            </button>
            
        </div>
    )



}

export default PreviewContent;
