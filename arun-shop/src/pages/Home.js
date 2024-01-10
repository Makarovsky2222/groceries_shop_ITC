//Home.js
import React from "react";
import { checkingUserSign, getMe, logout } from "../services/Authentication";
import AllProductList from '../components/Categories/CategoryProducts';
import DeleteProduct from "../components/Categories/ConfirmDelete";

const Home = () => {

    
    return (
        <div>
            Home
            <AllProductList />
            <DeleteProduct />
        </div>
    )
};

export default Home;