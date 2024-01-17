//Home.js
import React from "react";
import { getUserID, logout } from "../services/Authentication";
import { getMe } from "../services/UserServices";
import { updateUser } from "../services/UserServices";
// import { getMe, updateUser } from "../services/UserServices";
import Searchbar from '../components/General/Searchbar';

const Home = () => {
    const profile = async () => {
        const uid = getUserID()

        getMe(uid).then( (doc) => {
            console.log("Me: ", doc)
        })

    }

    async function editUser() {
        const uid = getUserID()

        await updateUser(uid, {
            username: 'power bank',
            firstname: 'dsfasf',
            lastname: 'ddddddddd',
            email: 'testing35@gmail.com',
            phone_number: '12343213423',
            image_url: '',
            register_date: 'dsafasfassa',
        })
    }

    return (
        <div>

            <Searchbar />

            
        </div>
    )
};

export default Home;