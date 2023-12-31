  //ProductList.js

  import React from "react";
  import AddProduct from "../components/AddProduct";
  import Category from "../components/Category";

  const ProductList = () => {
      const categories = [
          {
            categoryName: "Fruits",
            products: [
              { name: "Apple", price: 1.5 },
              { name: "Banana", price: 0.75 },
              { name: "Orange", price: 1.2 },
            ],
          },
          {
            categoryName: "Vegetables",
            products: [
              { name: "Carrot", price: 0.9 },
              { name: "Broccoli", price: 2.0 },
              { name: "Tomato", price: 1.0 },
            ],
          },
          // Add more categories as needed
        ];
      

    return (
      <div>
        <h1>Groceries Store</h1>
        {categories.map((category) => (
          <Category key={category.categoryName} {...category} />
        ))}
        <AddProduct />
      </div>
    );
  };

 export default ProductList;
