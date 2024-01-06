//Draft.js
import React, { useState } from 'react';
import { addCategory, deleteById, getAllCategory, getByID, updateByID } from "../services/Category";

const Draft = () => {

    const [formData, setFormData] = useState({
        name: '',
        color: '',
        image_url: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const cate_id = addCategory(formData)
    
        console.log("Category: ", cate_id)
    }

    const allCate = () => {
        const cat = getAllCategory()

        for (let i = 0; i < 3; i++) {
            console.log("data: ", cat[i])
          }
    }
    
    const getCateByID = () => {
        const cate = getByID("gAdMfAM4Woe2dW6rKZTl")
        console.log("cate: ", cate)
    }

    const updateCate = () => {
        updateByID("gAdMfAM4Woe2dW6rKZTl", {
            name: "Update Cate",
            color: "#cecece",
            image_url: "dafsa"
        })
    }
    
    const deleteCate = () => {
        deleteById("gAdMfAM4Woe2dW6rKZTl")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label for="name">Name:</label><br/>
                <input type="text" id="name" name="name" onChange={handleChange}/><br/>

                <label for="color">Color:</label><br/>
                <input type="color" id="color" name="color" onChange={handleChange}/><br/>

                <label for="image">Image:</label><br/>
                <input type="file" id="image" name="image" onChange={handleChange}/><br/>

                <input type="submit" value="Submit"/>
            </form>

            <button onClick={allCate}>AllCategory</button>
            <button onClick={getCateByID}>getByID</button>
            <button onClick={updateCate}>updateCate</button>
            <button onClick={deleteCate}>deleteCate</button>
            
        </div>
    );
};

export default Draft;