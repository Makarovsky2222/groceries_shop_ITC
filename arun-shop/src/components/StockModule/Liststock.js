import React, { useState } from "react";
import "./Styling/Liststock.css";
import EditDeleteModal from "./EditDeleteModal"; // Import the EditDeleteModal component

function Product({ id, dateTime, total, description, onDelete }) {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <tr className="each-product">
      <td>{id}</td>
      <td>{dateTime}</td>
      <td>{total} product</td>
      <td>${description}</td>
      <td>
        {/* Use EditDeleteModal instead of Delete */}
        <EditDeleteModal onDelete={handleDelete} />
      </td>
    </tr>
  );
}
// function
function Liststock() {
  const [products, setProducts] = useState([
    {
      id: "1214415",
      dateTime: "12/12/2013 11:28:00 PM",
      total: 21,
      description: "1,250",
    },
    // Add more products as needed
  ]);

  const handleDelete = (productId) => {
    // Remove the product with the given id from the products array
    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(updatedProducts);
  };

  return (
    <div>
      <table className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Date/Time</th>
            <th>Total</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <Product key={index} {...product} onDelete={handleDelete} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Liststock;
