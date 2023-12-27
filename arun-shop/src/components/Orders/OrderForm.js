// OrderForm.js
import React from "react";

const OrderForm = ({
  newOrder,
  setNewOrder,
  categories,
  locations,
  handleOrderSubmit,
  setOrderFormOpen,
}) => (
  <div className="order-form-window">
    {/* Order form content */}
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

    {/* Dropdown for selecting location */}
    <label>Location:</label>
    <select
      value={newOrder.location}
      onChange={(e) => setNewOrder({ ...newOrder, location: e.target.value })}
    ><option value="">Select a Location for delivery</option>
    {locations.map((location) => (
      <option key={location} value={location}>
        {location}
      </option>
    ))}
  </select>

    {/* Dropdown for selecting category */}
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

    {/* Submit button */}
    <button onClick={() => handleOrderSubmit(newOrder)}>Submit Order</button>

    {/* Close button */}
    <button onClick={() => setOrderFormOpen(false)}>Close</button>
  </div>
);

export default OrderForm;
