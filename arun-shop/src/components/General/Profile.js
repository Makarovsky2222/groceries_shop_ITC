import React from "react";
import './Styling/Profile.css';
import pfImg from '../../Asset/pf.png'
import yellowIcon from '../../Asset/yellowDropdown.png'


function DisplayProfile() {
    return (

        <div className="profile-container">
            <img id="pfImg" src={pfImg} />
            <img id="yellowImg" src={yellowIcon} />
        </div>

    )
}
export default DisplayProfile;