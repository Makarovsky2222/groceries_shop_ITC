//Home.js
import React from "react";
import { checkingUserSign, getMe, logout } from "../services/Authentication";
import SearchBar from '../components/General/Searchbar';

const Home = () => {

    
    return ( 
        <div>
            <SearchBar />

        </div>
    )
};

export default Home;