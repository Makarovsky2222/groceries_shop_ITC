//Home.js
import React from "react";
import { checkingUserSign, getMe, logout } from "../services/Authentication";
import AllProductList from '../components/Categories/CategoryProducts';

const Home = () => {

    
    return (
        <div>
            Home
            <AllProductList />
        </div>
    )
};

export default Home;