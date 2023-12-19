// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'


const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/order">Order</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
