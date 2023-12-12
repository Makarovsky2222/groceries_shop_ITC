// App.js
import React from 'react';
import Category from './Category';
import './App.css';

/**
 * The main App component for the groceries store website.
 *
 * @returns {JSX.Element} - The App component.
 */
const App = () => {
  const categories = [
    {
      categoryName: 'Fruits',
      products: [
        { name: 'Apple', price: 1.5 },
        { name: 'Banana', price: 0.75 },
        { name: 'Orange', price: 1.2 },
      ],
    },
    {
      categoryName: 'Vegetables',
      products: [
        { name: 'Carrot', price: 0.9 },
        { name: 'Broccoli', price: 2.0 },
        { name: 'Tomato', price: 1.0 },
      ],
    },
    // Add more categories as needed
  ];

  return (
    <div>
      <h1>Groceries Store</h1>
      {categories.map((category, index) => (
        <Category key={index} {...category} />
      ))}
    </div>
  );
}

export default App;
