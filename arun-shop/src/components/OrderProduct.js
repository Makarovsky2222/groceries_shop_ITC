// Import necessary dependencies
import React, { useState, useEffect } from 'react';
import ProductList from '../pages/ProductList';

const OrderProduct = () => {
  // Define state for order details
  const [orderDetails, setOrderDetails] = useState({
    category: '', // selected category
    product: '', // selected product
    emissionDate: '',
    estimatedArrivalDate: '',
    author: '',
  });

  // Define state for categories and products
  // const [categories, setCategories] = useState([]);
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

  // Function to flatten the categories into an array of products
  const flattenCategories = (categoriesArray) => {
    return categoriesArray.reduce((products, category) => {
      return [...products, ...category.products];
    }, []);
  };

  // Function to fetch categories from ProductList
  const fetchCategories = () => {
    // Set categories state with the categories array from ProductList
    //setCategories(ProductList.categories);
  };

  // Function to update order details when user selects a category or product
  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  // Function to handle form submission (creating a new order)
  const handleOrderSubmit = async (e) => {
    e.preventDefault();

    // with functionnal back-end
    // const response = await createOrderAPI(orderDetails);
    // setOrderDetails(response.data);
  };

  // Use useEffect to fetch categories when the component mounts
  useEffect(() => {
    fetchCategories();
  }, []); // The empty dependency array ensures that the effect runs only once when the component mounts

  return (
    <div>
      <h2>Create a New Order</h2>
      <form onSubmit={handleOrderSubmit}>
        {/* Dropdown for selecting category */}
        <label>
          Select Category:
          <select
            name="category"
            value={orderDetails.category}
            onChange={handleSelectChange}
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category.categoryName} value={category.categoryName}>
                {category.categoryName}
              </option>
            ))}
          </select>
        </label>

        {/* Dropdown for selecting product */}
        <label>
          Select Product:
          <select
            name="product"
            value={orderDetails.product}
            onChange={handleSelectChange}
          >
            <option value="">Select Product</option>
            {orderDetails.category &&
              flattenCategories(categories)
                .filter((product) => product.categoryName === orderDetails.category)
                .map((product) => (
                  <option key={product.name} value={product.name}>
                    {product.name}
                  </option>
                ))}
          </select>
        </label>

        {/* Add input fields for emission date, estimated arrival date, and author */}
        {/* Use appropriate input types and labels */}
        {/* Example: */}
        <label>
          Emission Date:
          <input
            type="text"
            name="emissionDate"
            value={orderDetails.emissionDate}
            onChange={handleSelectChange}
          />
        </label>

        {/* Repeat for other input fields */}
        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
};

export default OrderProduct;
