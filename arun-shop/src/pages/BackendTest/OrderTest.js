import React, { useState, useEffect } from "react";
import { render, screen } from "@testing-library/react";

const OrderTest = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {

        
    };

    getOrders();
  }, []);

  return (
    <div>
      <h1>Orders</h1>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            {order.customerName} - {order.totalPrice}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderTest;
