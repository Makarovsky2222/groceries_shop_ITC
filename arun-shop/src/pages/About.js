//About.js
import React from "react";
import { localUserChecking, logout } from "../services/Authentication";
import DisplayProfile from "../components/General/Profile";

const About = () => {

    localUserChecking().then((user) => {
        if (user != null) {
            console.log("get current user: ", user)
        } else {
            console.log("don't have user!")
        }
    })

    
    return (
        <div>
            <button onClick={logout()}>Sign Out</button>

            <DisplayProfile />
        </div>
    )
};

export default About;