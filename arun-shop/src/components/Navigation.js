// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'


const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/order">Order</Link>
        </li>
        <li>
          <Link to="/history">History</Link>
        </li>
        <li>
          <Link to="/product">Stock</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>

      </ul>
    </nav>
  );
};

export default Navigation;
