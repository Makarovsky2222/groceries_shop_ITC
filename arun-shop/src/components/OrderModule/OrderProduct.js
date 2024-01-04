import React, { useState, useMemo } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import OrderForm from "./OrderForm";
import OrderList from "./OrderList";
import LeftPanel from "./LeftPanel";
import Category from "../Category";
import Caddy from "./Caddy";
import categoriesData from "./categories.json"; // Import the JSON file directly
import "./Styling/OrderProduct.css";

const OrderProduct = () => {
  // Initial data
  const initialOrders = [
    {
      id: "1",
      name: "Order 1",
      date: "12/25/2023",
      author: "John Doe",
      location: "Location 1",
      amount: 150.0,
    },
    {
      id: "2",
      name: "Order 2",
      date: "12/26/2023",
      author: "Jane Smith",
      location: "Location 2",
      amount: 200.0,
    },
  ];

  const initialNewOrder = {
    id: "",
    name: "",
    date: "",
    author: "",
    location: "",
    amount: "",
  };

  const initialCategories = categoriesData.categories; /*useMemo(
    () => [
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
    ],
    []
  );*/

  const initialLocations = [
    "Arun Shop Toul Tum Poung",
    "Arun Shop Daun Penh",
    "Arun Shop BKK1",
  ];

  // State variables
  const [currentView, setCurrentView] = useState("newOrder");
  const [orders, setOrders] = useState(initialOrders);
  const [newOrder, setNewOrder] = useState(initialNewOrder);
  const [locations] = useState(initialLocations);
  const [isOrderFormOpen, setOrderFormOpen] = useState(false);

  // Functions for handling orders
  const handleOrderSubmit = () => {
    console.log("Order Submitted:", newOrder);
    setOrders((prevOrders) => [
      ...prevOrders,
      { ...newOrder, id: String(prevOrders.length + 1) },
    ]);
    setOrderFormOpen(false);
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

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="order-dashboard">
        {initialCategories.map((category) => (
          <Category key={category.categoryName} {...category} />
        ))}
        <LeftPanel
          setOrderFormOpen={setOrderFormOpen}
          setCurrentView={setCurrentView}
        />
        <div className="order-form-container">
          {isOrderFormOpen && (
            <OrderForm
              newOrder={newOrder}
              setNewOrder={setNewOrder}
              categories={initialCategories}
              locations={locations}
              handleOrderSubmit={handleOrderSubmit}
              setOrderFormOpen={setOrderFormOpen}
            />
          )}
          {currentView === "currentOrders" && (
            <OrderList
              currentView={currentView}
              orders={orders}
              filterAndSortOrders={filterAndSortOrders}
            />
          )}
        </div>
        <Caddy />
      </div>
    </DndProvider>
  );
};

export default OrderProduct;
