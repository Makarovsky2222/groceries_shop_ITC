//Home.js
import React from "react";
import { checkingUserSign, getMe, logout } from "../services/Authentication";
// import SearchBar from '../components/General/Searchbar';
import Dropdown from '../components/General/DropDown';

const Home = () => {

    
    return ( 
        <div>
            {/* <SearchBar /> */}

            <Dropdown />
        </div>
    )
};

export default Home;