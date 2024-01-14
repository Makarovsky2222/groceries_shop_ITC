import React from 'react';

function TestingUploadImage() {

    function showMyImage() {

        const inp = document.getElementById("upload")

        console.log(inp.url)
        // const img = document.getElementById('image')
        // img.src = fileInput.value
        
      }

    return (

        <div className="container">

        <input type="file" name="image-url" id='upload' onChange={showMyImage} value="" />
        
        <img src="" id='image' />

        </div>
    )
}


export default TestingUploadImage;