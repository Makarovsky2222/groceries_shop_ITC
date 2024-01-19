// OrderContext.js
import React from 'react'
import { createContext, useContext, useState } from "react";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orderHistory, setOrderHistory] = useState([]);

  const addOrderToHistory = (order) => {
    setOrderHistory((prevOrders) => [...prevOrders, order]);
  };

  return (
    <OrderContext.Provider value={{ orderHistory, addOrderToHistory }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderContext = () => {
  return useContext(OrderContext);
};
