import React, { useState, useRef } from "react";
import './Styling/UploadImage.css'


const UploadAndDisplayImage = () => {

  const [selectedImage, setSelectedImage] = useState(null);

  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      {/* <h1>Upload and Display Image usign React Hook's</h1> */}

      {selectedImage && (
        <div>
          <img
            alt="not found"
            width={"250px"}
            onClick={handleClick}
            src={URL.createObjectURL(selectedImage)}
          /> 
        </div>
      )} 
    

      <br />
      <br />
      
      <div>
      <label htmlFor="upload-button">
        <button onClick={handleClick}>uPLOAD iMAGE</button>
      </label>

      <input
        type="file"
        id="upload-button"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={(event) => {
            console.log(event.target.files[0]);
            console.log(URL.createObjectURL(event.target.files[0]))
            setSelectedImage(event.target.files[0]);
        }}
      />
    </div>

    </div>
  );
};

export default UploadAndDisplayImage;