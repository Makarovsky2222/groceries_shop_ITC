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
      <div className="category-pages">
        <ul>
          <div className="logo">
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            {isReduced ? (
              <li>
                <Link to="/order">
                  <img src={orderlogo} alt="Order Logo" />
                </Link>
              </li>
            ) : (
              <li>
                <Link to="/order">
                  <img src={orderlogo} alt="Order Logo" />
                  <div className="textlogo">
                    <span>Order</span>
                  </div>
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
                <Link to="/history">
                  <img src={historylogo} alt="History Logo" />
                  <div className="textlogo">History</div>
                </Link>
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
                <Link to="/product">
                  <img src={stocklogo} alt="Stock Logo" />
                  <div className="textlogo">Stock</div>
                </Link>
              </li>
            )}
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
          </div>
        </ul>
      </div>
      <div className="toggle-btn" onClick={toggleNavbar}>
        {isReduced ? "→" : "←"}
      </div>
    </nav>
  );
};

export default Navigation;
