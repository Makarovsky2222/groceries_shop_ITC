import React from "react";
import './Styling/BlockCategory.css';
import allproductimage from '../../Resources/products/categories/allProducts.png'
import vegimage from '../../Resources/products/categories/vegetables.png'
import fruitimage from '../../Resources/products/categories/fruits.png'
import ingreimage from '../../Resources/products/categories/ingredients.png'
import meatimage from '../../Resources/products/categories/meats.png'
import createimg from '../../Resources/products/categories/create.svg'






function BlockCategory() {
    return(

        <div className="categories-section">
            <div className="each-block">
                <img id="img" src={allproductimage} />
                <p id="text" >All Products</p>
            </div>

            <div className="veg-block">
                <img id="img" src={vegimage} />
                <p id="veg-text" >Vegetables</p>
            </div>

            <div className="fruit-block">
                <img id="img" src={fruitimage} />
                <p id="veg-text" >Fruits</p>
            </div>

            <div className="ingre-block">
                <img id="img" src={ingreimage} />
                <p id="veg-text" >Ingredients</p>
            </div>
            
            <div className="meat-block">
                <img id="img" src={meatimage} />
                <p id="veg-text" >Meats</p>
            </div>




            <div className="new-block">
                <img id="img" src={createimg} />
                <p id="veg-text" >New Category</p>
            </div>


        </div>

    )


}

export default BlockCategory;