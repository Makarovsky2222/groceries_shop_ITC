// OrderProduct.js
import React, { useState } from "react";
import OrderForm from "./OrderForm";
import OrderList from "./OrderList";
import LeftPanel from "./LeftPanel";
import "./OrderProduct.css";

const OrderProduct = () => {
  const [currentView, setCurrentView] = useState("newOrder");
  const [orders, setOrders] = useState([
    {
      id: "1",
      name: "Order 1",
      date: "12/25/2023",
      author: "John Doe",
      amount: 150.0,
      },
    {
      id: "2",
      name: "Order 2",
      date: "12/26/2023",
      author: "Jane Smith",
      amount: 200.0,
    },
  ]);

  const [newOrder, setNewOrder] = useState({
    id: "",
    name: "",
    date: "",
    author: "",
    amount: "",
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
    setOrderFormOpen(false); // Close the order form after submission
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
        default:
          return 0;
      }
    });

    setOrders(sortedOrders);
  };

  const renderOrderForm = () => (
    <OrderForm
      newOrder={newOrder}
      setNewOrder={setNewOrder}
      categories={categories}
      handleOrderSubmit={handleOrderSubmit}
      setOrderFormOpen={setOrderFormOpen}
    />
  );

  const renderOrderList = () => (
    <OrderList
      currentView={currentView}
      orders={orders}
      filterAndSortOrders={filterAndSortOrders}
    />
  );

  return (
    <div className="order-dashboard">
      <LeftPanel
        setOrderFormOpen={setOrderFormOpen}
        setCurrentView={setCurrentView}
      />
      <div className="order-form-container">
        {isOrderFormOpen && renderOrderForm()}
        {currentView === "currentOrders" && renderOrderList()}
      </div>
    </div>
  );
};

export default OrderProduct;
