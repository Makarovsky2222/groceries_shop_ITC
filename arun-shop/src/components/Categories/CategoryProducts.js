import React from "react";
import './CategoryProducts.css'
import EditDeleteAction from './ActionButtons'


function AllProductList() {



    return (
        <div className="action-on-product">
            <div className="product-container">

                <div className="each-product">

                    <div className="product-name-and-pf">
                        <img id="product-img" src="https://i5.walmartimages.com/seo/Fresh-Slicing-Tomato-Each_a1e8e44a-2b82-48ab-9c09-b68420f6954c.04f6e0e87807fc5457f57e3ec0770061.jpeg" alt="My Image" />  
                        <p id="product-name">Tomato Aussie</p>
                    </div>

                    <div id="product-category">
                        Vegetables
                    </div>

                    <p id="product-price">10.00$</p>

                    <div id="product-description"> 
                        Cherry Australia has two types of fruit: one with a hard skin, the other with a soft skin. The soft-skinned fruits are a bit larger than the hard-skinned ones and have a higher sugar content. These fruits are widely used in fruit juices and canned fruits 
                    </div>
                    
                    <p id="product-tax">0%</p>
                    
                </div>

                <EditDeleteAction />

            </div>

        </div>

        
    )
}

export default AllProductList;