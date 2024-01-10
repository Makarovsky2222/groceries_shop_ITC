import React from "react";
import './CategoryProducts.css'


function AllProductList() {



    return (
        <div className="product-container">

            <div className="each-product">
                <p id="product-name">Beef USA</p>

                <div id="product-category">
                    Vegetables
                </div>

                <p id="product-price">10.00%</p>

                <div id="product-description"> 
                    Cherry Australia has two types of fruit: one with a hard skin, the other with a soft skin. The soft-skinned fruits are a bit larger than the hard-skinned ones and have a higher sugar content. These fruits are widely used in fruit juices and canned fruits 
                </div>
                
                <p id="product-tax">0%</p>
                

                <div className="edit-delete">
                    
                </div>
                
            </div>


        </div>

        
    )
}

export default AllProductList;