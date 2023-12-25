// OrderProduct.jsx
import React, { useState } from "react";
import "./OrderProduct.css";

const OrderProduct = () => {
  const [currentView, setCurrentView] = useState("newOrder");
  const [orders, setOrders] = useState([
    {
      id: "1",
      name: "Order 1",
      date: "12/25/2023",
      author: "John Doe",
      location: "Location 1",
      amount: 150.0,
      status: "Accepted",
    },
    {
      id: "2",
      name: "Order 2",
      date: "12/26/2023",
      author: "Jane Smith",
      location: "Location 2",
      amount: 200.0,
      status: "Delivery",
    },
  ]);

  const [newOrder, setNewOrder] = useState({
    id: "",
    name: "",
    date: "",
    author: "",
    location: "",
    amount: "",
    status: "Accepted",
  });
  const [categories, setCategories] = useState([
    "Category1",
    "Category2",
    "Category3",
  ]);
  const [isOrderFormOpen, setOrderFormOpen] = useState(false);

  const handleOrderSubmit = () => {
    console.log("Order Submitted:", newOrder);
    setOrders((prevOrders) => [
      ...prevOrders,
      { ...newOrder, id: String(prevOrders.length + 1) },
    ]);
  };

  const filterAndSortOrders = (columnName) => {
    const sortedOrders = [...orders].sort((a, b) => {
      switch (columnName) {
        case "Amount":
          return a.amount - b.amount;
        case "Date":
          return new Date(a.date) - new Date(b.date);
        case "Author":
          return a.author.localeCompare(b.author);
        case "Status":
          return a.status.localeCompare(b.status);
        default:
          return 0;
      }
    });

    setOrders(sortedOrders);
  };

  const renderOrderForm = () => (
    <div className="order-form-window">
      <label>ID:</label>
      <input
        type="text"
        value={newOrder.id}
        onChange={(e) => setNewOrder({ ...newOrder, id: e.target.value })}
      />
      <label>Emission Date:</label>
      <input
        type="text"
        value={newOrder.date}
        onChange={(e) => setNewOrder({ ...newOrder, date: e.target.value })}
      />
      <label>Author:</label>
      <input
        type="text"
        value={newOrder.author}
        onChange={(e) => setNewOrder({ ...newOrder, author: e.target.value })}
      />
      <label>Category:</label>
      <select
        value={newOrder.selectedCategory}
        onChange={(e) =>
          setNewOrder({ ...newOrder, selectedCategory: e.target.value })
        }
      >
        <option value="">Select a Category</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button onClick={handleOrderSubmit}>Submit Order</button>
      <button onClick={() => setOrderFormOpen(false)}>Close</button>
    </div>
  );

  const renderOrderList = () => (
    <div className="order-list-container">
      <h2>
        {currentView === "currentOrders" ? "Current" : "Completed"} Orders
      </h2>
      {["Amount", "Date", "Author", "Status"].map((option) => (
        <button key={option} onClick={() => filterAndSortOrders(option)}>
          Sort by {option}
        </button>
      ))}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Date</th>
            <th>Author</th>
            <th>Location</th>
            <th>Amount ($)</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.name}</td>
              <td>{order.date}</td>
              <td>{order.author}</td>
              <td>{order.location}</td>
              <td>{order.amount}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="order-dashboard">
      <div className="left-panel">
        <button onClick={() => setOrderFormOpen(true)}>New Order</button>
        <button onClick={() => setCurrentView("currentOrders")}>
          Current Orders
        </button>
        <button onClick={() => setCurrentView("completedOrders")}>
          Completed Orders
        </button>
      </div>
      <div className="order-form-container">
        {isOrderFormOpen && renderOrderForm()}
        {currentView === "currentOrders" && renderOrderList()}
        {/* Similar logic for completedOrders view */}
      </div>
    </div>
  );
};

export default OrderProduct;
