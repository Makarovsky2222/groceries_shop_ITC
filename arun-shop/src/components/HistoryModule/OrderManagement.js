import React, { useState, useMemo } from "react";
import OrderList from "./OrderList";
import OrderDetails from "./OrderDetails";
import SearchBarOrders from "./SearchBarOrders";

const OrderManagement = ({ orders }) => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBy, setFilterBy] = useState(""); 
  const [ordersList, setOrdersList] = useState(orders);

  const handleOrderClick = (order) => {
    setSelectedOrder(order);
  };

  const handleDeleteOrder = (orderId) => {
    // Add logic for updating orders in the database
    const updatedOrders = ordersList.filter((order) => order.id !== orderId);
    setSelectedOrder(null); // Clear the selected order after deletion
    // Update the state with the new order list
    setOrdersList(updatedOrders);
  };
  
  const handleSort = (columnName) => {
    const newSortConfig = {
      key: columnName,
      direction: sortConfig.key === columnName && sortConfig.direction === "ascending" ? "descending" : "ascending",
    };
    setSortConfig(newSortConfig);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleFilter = (filter) => {
    setFilterBy(filter);
  };

  // Filter orders based on search term
  const filteredOrders = ordersList.filter((order) =>
    order.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Apply additional filtering based on filterBy
  const finalOrders = useMemo(() => {
    if (filterBy === "ID") {
      return filteredOrders.sort((a, b) => a.id.localeCompare(b.id));
    } else if (filterBy === "Date") {
      return filteredOrders.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (filterBy === "Amount") {
      return filteredOrders.sort((a, b) => a.amount - b.amount);
    } else if (filterBy === "PaymentMethod") {
      return filteredOrders.sort((a, b) => a.paymentMethod.localeCompare(b.paymentMethod));
    } else {
      return filteredOrders;
    }
  }, [filteredOrders, filterBy]);

  return (
    <div className="order-management">
      <SearchBarOrders onSearch={handleSearch} onFilter={handleFilter} />
      <div style={{ display: "flex" }}>
        <OrderList
          orders={finalOrders}
          onOrderClick={handleOrderClick}
          requestSort={handleSort}
          sortConfig={sortConfig}
        />
        {selectedOrder && (
          <div className="order-details-panel">
            <button onClick={() => setSelectedOrder(null)}>Back to List</button>
            <button onClick={() => handleDeleteOrder(selectedOrder.id)}>
              Delete Order
            </button>
            <OrderDetails order={selectedOrder} />
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderManagement;
