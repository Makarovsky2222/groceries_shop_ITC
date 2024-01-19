import React, { useEffect, useState } from "react";
import OrderManagement from "./OrderManagement";
import FinancialReport from "./FinancialReport";
import "./Styling/HistoryOrder.css";
import { useOrderContext } from "./OrderContext";

const HistoryOrder = () => {
  const orderContext = useOrderContext();

  const initialOrders = [
    {
      id: "1",
      date: "12/25/2023",
      amount: 150.0,
      paymentMethod: "Cash",
      products: [
        { id: "1", name: "Product A", price: 20.0 },
        { id: "2", name: "Product B", price: 30.0 },
      ],
    },
    {
      id: "2",
      date: "12/26/2023",
      amount: 200.0,
      paymentMethod: "Credit Card",
      products: [
        { id: "3", name: "Product C", price: 25.0 },
        { id: "4", name: "Product D", price: 15.0 },
      ],
    },
    // ... additional orders
  ];

  const detailedInitialOrders = mapOrdersToDetails(initialOrders);

  // Declare combinedOrders outside useEffect
  const [combinedOrders, setCombinedOrders] = useState([]);

  useEffect(() => {
    const additionalOrders = orderContext.orderHistory;
    const combinedOrdersData = combineOrders(initialOrders, additionalOrders);
    setCombinedOrders(combinedOrdersData);
    console.log("Initial Orders:", initialOrders);
    console.log("additionalOrders:", additionalOrders);
    console.log("Combined Orders:", combinedOrdersData);
  }, [orderContext]);

  return (
    <div className="history-order">
      <OrderManagement orders={combinedOrders} />
      <FinancialReport orders={combinedOrders} />
    </div>
  );
};

// Helper function to map orders to detailed format
const mapOrdersToDetails = (orders) =>
  orders.map((order) => ({
    ...order,
    products: order.products
      ? order.products.map((product) => ({
          amount: product.price,
          category_id: "1", // Replace with the actual category_id
          description: "", // Add description if available
          image_url: "", // Add image_url if available
          key: "", // Add key if available
          name: product.name,
          price: product.price,
          tax: 0.1, // Replace with the actual tax
        }))
      : [],
  }));

const combineOrders = (initialOrders, additionalOrders) => {
  let combinedOrders = [];
  // Combine initial orders
  combinedOrders = combinedOrders.concat(mapOrdersToDetails(initialOrders)); // Combine additional orders
  additionalOrders.forEach((order) => {
    combinedOrders = combinedOrders.concat(order);
  });
  return combinedOrders;
};

export default HistoryOrder;
