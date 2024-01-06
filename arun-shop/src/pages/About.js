//About.js
import React from "react";
import { localUserChecking, logout } from "../services/Authentication";

const About = () => {

    
    return (
        <div>
            <button onClick={logout}>Sign Out</button>
        </div>
    )
};

export default About;