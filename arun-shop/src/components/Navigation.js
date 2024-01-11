// Navigation.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import toplogo from "../Resources/logo/logo.svg";
import orderlogo from "../Resources/icons/order.svg";
import stocklogo from "../Resources/icons/stock.svg";
import historylogo from "../Resources/icons/history.svg";

const Navigation = () => {
  const [isReduced, setReduced] = useState(false);

  const toggleNavbar = () => {
    setReduced(!isReduced);
  };
  return (
    <nav className={`navbar ${isReduced ? "reduced" : ""}`}>
      <div className="top-logo">
        <img src={toplogo} alt="Top Logo" />
      </div>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        {isReduced ? (
          <li>
            <Link to="/order">
            <div className="logo">
              <img src={orderlogo} alt="Order Logo" />
            </div>
            </Link>
          </li>
        ) : (
          <li>
            <img src={orderlogo} alt="Order Logo" />
            <Link to="/order">
              <span>Order</span>
              </Link>
          </li>
        )}
        {isReduced ? (
          <li>
            <Link to="/history">
              <img src={historylogo} alt="History Logo" />
            </Link>
          </li>
        ) : (
          <li>
            <img src={historylogo} alt="History Logo" />
            <Link to="/history">History</Link>
          </li>
        )}
        {isReduced ? (
          <li>
            <Link to="/product">
              <img src={stocklogo} alt="Stock Logo" />
            </Link>
          </li>
        ) : (
          <li>
            <img src={stocklogo} alt="Stock Logo" />
            <Link to="/product">Stock</Link>
          </li>
        )}
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <div className="toggle-btn" onClick={toggleNavbar}>
        {isReduced ? '→' : '←'}
      </div>
    </nav>
  );
};

export default Navigation;
