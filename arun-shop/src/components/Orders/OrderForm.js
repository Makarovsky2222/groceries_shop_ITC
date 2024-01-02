import React from "react";

const OrderForm = ({
  newOrder,
  setNewOrder,
  categories,
  handleOrderSubmit,
  setOrderFormOpen,
}) => {
  const isFormValid = () => {
    // Check if all required fields are filled
    return (
      newOrder.id &&
      newOrder.date &&
      newOrder.author &&
      newOrder.selectedCategory
    );
  };

  const handleSubmit = () => {
    if (isFormValid()) {
      // Only submit the order if the form is valid
      handleOrderSubmit(newOrder);
    } else {
      alert("Please fill in all fields before submitting the order.");
    }
  };

  return (
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
      <button onClick={handleSubmit}>Submit Order</button>

      {/* Close button */}
      <button onClick={() => setOrderFormOpen(false)}>Close</button>
    </div>
  );
};

export default OrderForm;
