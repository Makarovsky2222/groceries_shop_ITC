import React, { useState, useRef } from "react";


export const UploadImage = () => {

    const selectedImage = "https://www.shutterstock.com/image-vector/camera-upload-icon-260nw-1054194089.jpg"
    
    const fileInputRef = useRef(null);

    const handleClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div>

            <input
                type="file"
                id="upload-button"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={(event) => {
                    console.log(event.target.files[0]);
                    document.getElementById('img').src =  URL.createObjectURL(event.target.files[0]);
                }} />

                { selectedImage && (
                    <img
                    id="img"
                    alt="not found"
                    width={"200px"}
                    height={"180px"}
                    onClick={handleClick}
                    src={selectedImage}
                />
                )}


        </div>
    )
}