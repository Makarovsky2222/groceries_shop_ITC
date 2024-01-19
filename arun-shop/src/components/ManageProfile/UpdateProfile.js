import React from "react";
import './Styling/UpdateProfile.css';
import pf from '../../Resources/login-img/bigpf.png'


function UpdateProfile() {

    return(

        <div className="section-control">
            <div className="profile-container">
                <p className="pf-text">PROFILE</p>
                <div className="line"></div>
                <div className="picture">
                    <img src={pf} />
                </div>

            </div>


        </div>
    )


}

export default UpdateProfile;