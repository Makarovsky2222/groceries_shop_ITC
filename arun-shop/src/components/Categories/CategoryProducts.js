// AllProductList.js
import React, { useState } from "react";
import "./Styling/CategoryProducts.css";
import EditDeleteAction from "./ActionButtons";

const initialProducts = [
  {
    id: 1,
    name: "Tomato Aussie",
    category: "Vegetables",
    price: "10.00$",
    description: "Cherry Australia has two types of fruit...",
    tax: "0%",
    imageUrl:
      "https://i5.walmartimages.com/seo/Fresh-Slicing-Tomato-Each_a1e8e44a-2b82-48ab-9c09-b68420f6954c.04f6e0e87807fc5457f57e3ec0770061.jpeg",
  },
  {
    id: 2,
    name: "Apple Gala",
    category: "Fruits",
    price: "5.00$",
    description: "Gala apples are sweet, fine textured, and aromatic.",
    tax: "5%",
    imageUrl:
      "https://i5.walmartimages.com/seo/n/aw/4/6/8/6/4/5/aw4686459_300x300.jpg",
  },
  {
    id: 3,
    name: "Carrot Fresh",
    category: "Vegetables",
    price: "2.50$",
    description: "Fresh and crunchy carrots for a healthy snack.",
    tax: "0%",
    imageUrl:
      "https://i5.walmartimages.com/seo/n/aw/4/6/8/6/4/5/aw4686459_300x300.jpg",
  },
  // Add more example products as needed
];

function AllProductList() {
  const [products, setProducts] = useState(initialProducts);
  const [editableProduct, setEditableProduct] = useState(null);

  const handleEdit = (productId) => {
    // Set the product as editable when the "Edit" button is clicked
    setEditableProduct(productId);
  };

  const handleSave = () => {
    // Save the edited product and update the state
    // (You can implement logic to update the backend as well)
    setEditableProduct(null);
  };

  const handleCancel = () => {
    // Cancel editing and reset the editableProduct state
    setEditableProduct(null);
  };

  const handleDelete = (productId) => {
    // Handle delete functionality
    console.log("Delete button clicked for product with ID:", productId);
    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(updatedProducts);
  };

  const handleInputChange = (productId, fieldName, value) => {
    // Update the field value for the editable product
    const updatedProducts = products.map((product) => {
      if (product.id === productId && editableProduct === productId) {
        return { ...product, [fieldName]: value };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  return (
    <div className="action-on-product">
      {products.map((product) => (
        <div className="product-container" key={product.id}>
          <div className="each-product">
            {/* Product details */}
            <div className="product-name-and-pf">
              <img id="product-img" src={product.imageUrl} alt="My Image" />
              {editableProduct === product.id ? (
                <input
                  type="text"
                  value={product.name}
                  onChange={(e) =>
                    handleInputChange(product.id, "name", e.target.value)
                  }
                />
              ) : (
                <p id="product-name">{product.name}</p>
              )}
            </div>
            {editableProduct === product.id ? (
              <div>
                <input
                  type="text"
                  value={product.category}
                  onChange={(e) =>
                    handleInputChange(product.id, "category", e.target.value)
                  }
                />
              </div>
            ) : (
              <div id="product-category">{product.category}</div>
            )}
            {editableProduct === product.id ? (
              <div>
                <input
                  type="text"
                  value={product.price}
                  onChange={(e) =>
                    handleInputChange(product.id, "price", e.target.value)
                  }
                />
              </div>
            ) : (
              <p id="product-price">{product.price}</p>
            )}
            {editableProduct === product.id ? (
              <div>
                <textarea
                  value={product.description}
                  onChange={(e) =>
                    handleInputChange(product.id, "description", e.target.value)
                  }
                />
              </div>
            ) : (
              <div id="product-description">{product.description}</div>
            )}
            {editableProduct === product.id ? (
              <div>
                <input
                  type="text"
                  value={product.tax}
                  onChange={(e) =>
                    handleInputChange(product.id, "tax", e.target.value)
                  }
                />
              </div>
            ) : (
              <p id="product-tax">{product.tax}</p>
            )}
          </div>
          {editableProduct === product.id ? (
            <div>
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          ) : (
            <EditDeleteAction
              onEdit={() => handleEdit(product.id)}
              onDelete={() => handleDelete(product.id)}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default AllProductList;
