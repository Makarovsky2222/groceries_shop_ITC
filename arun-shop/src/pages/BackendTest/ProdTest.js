// Import the CRUD functions
import React from 'react';
import { createProduct, getProducts, updateProduct } from '../../services/Product';

// Your React component
const ProdTest = () => {
  // Example usage of createProduct
  const handleAddProduct = async () => {
    const productData = {
        name: "bread",
        price: 12.00,
        amount: 150,
        tax: 0.1,
        description: "Best for breakfast",
        category_id: "ELW2eTrmzoEJ9Bq77fT4",
        image_url: ""
    };
    const imageEle = document.getElementById("image")
    const imageFile = imageEle.files[0]

    await createProduct(productData, imageFile);

    // Now you can fetch the updated product list if needed
    const updatedProducts = await getProducts();
    console.log(updatedProducts);
  };

  // Example usage of getProducts
  const handleGetProducts = async () => {
    const products = await getProducts();
    console.log("Products :", products);
  };

  // Example usage of updateProduct
  const handleUpdateProduct = async (productId) => {
    const updatedData = {
      name: 'Updated Product',
      price: 60.0,
    };

    const imageEle = document.getElementById("image")
    const imageFile = imageEle.files[0]

    await updateProduct(productId, updatedData, imageFile);

    // Now you can fetch the updated product list if needed
    const updatedProducts = await getProducts();
    console.log(updatedProducts);
  };



  return (
    <div>
        <input type="file" id="image" />
      <button onClick={handleAddProduct}>Add Product</button>
      <button onClick={handleGetProducts}>Get Products</button>
      {/* Assume you have a product ID for updating */}
      <button onClick={() => handleUpdateProduct('yourProductId')}>Update Product</button>
    </div>
  );
};

export default ProdTest;
