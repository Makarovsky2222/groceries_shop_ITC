// OrderProduct.jsx
import React, { useState } from "react";
import "./OrderProduct.css";

const OrderProduct = () => {
  //State to manage current orders
  const [currentOrders, setCurrentOrders] = useState([
    { id: "1", emissionDate: "2023-12-25", author: "John Doe", products: [] },
    { id: "2", emissionDate: "2023-12-26", author: "Jane Smith", products: [] },
    // Add more orders as needed, and we need to fetch them from backend
  ]);

  // State to manage visibility of current orders
  const [isOrderListOpen, setOrderListOpen] = useState(false);

  // Function to toggle the visibility of current orders
  const toggleOrderList = () => {
    setOrderListOpen(!isOrderListOpen);
  };

  // State to manage new order data
  const [order, setOrder] = useState({
    id: "",
    emissionDate: "",
    author: "",
    selectedCategory: "",
    selectedProduct: "",
  });

  // State to manage categories (you might fetch these from a backend)
  const [categories, setCategories] = useState([
    "Category1",
    "Category2",
    "Category3",
  ]);

  // State to manage visibility of the order form window
  const [isOrderFormOpen, setOrderFormOpen] = useState(false);

  // Function to handle order form submission
  const handleOrderSubmit = () => {
    // Implement logic to handle order submission, e.g., send data to the backend
    console.log("Order Submitted:", order);
  };

  return (
    <div className="order-form-container">
      <button onClick={() => setOrderFormOpen(true)}>Create New Order</button>
      <button onClick={toggleOrderList}>See Current Orders</button>

      {isOrderListOpen && (
        <div className="current-orders">
          <h2>Current Orders</h2>
          <ul>
            {currentOrders.map((order) => (
              <li key={order.id}>
                Order ID: {order.id}, Estimated Date: {order.emissionDate}
              </li>
            ))}
          </ul>
        </div>
      )}

      {isOrderFormOpen && (
        <div className="order-form-window">
          {/* Order form content */}
          <label>ID:</label>
          <input
            type="text"
            value={order.id}
            onChange={(e) => setOrder({ ...order, id: e.target.value })}
          />

          <label>Emission Date:</label>
          <input
            type="text"
            value={order.emissionDate}
            onChange={(e) =>
              setOrder({ ...order, emissionDate: e.target.value })
            }
          />

          <label>Author:</label>
          <input
            type="text"
            value={order.author}
            onChange={(e) => setOrder({ ...order, author: e.target.value })}
          />

          {/* Dropdown for selecting category */}
          <label>Category:</label>
          <select
            value={order.selectedCategory}
            onChange={(e) =>
              setOrder({ ...order, selectedCategory: e.target.value })
            }
          >
            <option value="">Select a Category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          {/* Submit button */}
          <button onClick={handleOrderSubmit}>Submit Order</button>

          {/* Close button */}
          <button onClick={() => setOrderFormOpen(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default OrderProduct;
