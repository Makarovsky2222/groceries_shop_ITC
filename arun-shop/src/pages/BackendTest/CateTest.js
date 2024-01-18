//CateTest.js
import React, { useState } from 'react';
import { addCategory, deleteById, getAllCategory, getByID, updateByID, updateCateImage } from "../../services/Category";

const CateTest = () => {

    const [formData, setFormData] = useState({
        name: '',
        color: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        
        const fileInput = document.getElementById('image');
    
        // Get the selected file
        const file = fileInput.files[0];

        const cate_id = addCategory(formData, file)
    
        console.log("Category: ", cate_id)
    }

    const allCate = () => {
        const cat = getAllCategory()

        console.log("data: ", cat)
          
    }
    
    const getCateByID = () => {
        const cate = getByID("97GKZWLZtFsunbG5wfEt")
        console.log("cate: ", cate)
    }

    const updateCate = () => {
        updateByID("97GKZWLZtFsunbG5wfEt", {
            name: "Update Cate",
        })
    }
    
    const deleteCate = () => {
        deleteById("97GKZWLZtFsunbG5wfEt")
    }

    function updateImg() {
        
        const fileInput = document.getElementById('newImage');
        const file = fileInput.files[0];

        updateCateImage("ELW2eTrmzoEJ9Bq77fT4", file)
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
            
            <br/><br/><br/><br/>
            <div>
                <input type="file" id="newImage" name="newImage" onChange={handleChange}/><br/>
                <button onClick={updateImg}>newImage</button>


            </div>
        </div>
    );
};

export default CateTest;