import React from "react";
import './Styling/EmptyProduct.css';
import emptyImg from '../../Resources/icons/chilli.svg'

function EmptyProduct() {
    return (

        <div className="emptyList">
            <img id="emptyImg" src={emptyImg}/>
            <p id="text">Empty Product</p>


        </div>

    )
}
export default EmptyProduct;