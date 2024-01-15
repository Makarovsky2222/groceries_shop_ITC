// Navigation.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import toplogo from "../Resources/logo/logo.svg";
import orderlogo from "../Resources/icons/order.svg";
import stocklogo from "../Resources/icons/stock.svg";
import historylogo from "../Resources/icons/history.svg";
import categorylogo from "../Resources/icons/categories.svg";

const Navigation = ({ isAuthenticated }) => {
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
            <div className="toggle-btn" onClick={toggleNavbar}>
              {isReduced ? "+" : "-"}
            </div>
            {!isAuthenticated ? (
              <>
                <li>
                  <Link to="/login">LOGIN</Link>
                </li>
                <li>
                  <Link to="/signup">REGISTER</Link>
                </li>
              </>
            ) : (
              <>
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
                        <span>ORDER</span>
                      </div>
                    </Link>
                  </li>
                )}
                {isReduced ? (
                  <li>
                    <Link to="/categories">
                      <img src={categorylogo} alt="Category Logo" />
                    </Link>
                  </li>
                ) : (
                  <li>
                    <Link to="/categories">
                      <img src={categorylogo} alt="Category Logo" />
                      <div className="textlogo">
                        <span>CATEGORIES</span>
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
                      <div className="textlogo">HISTORY</div>
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
                      <div className="textlogo">STOCK</div>
                    </Link>
                  </li>
                )}
              </>
            )}
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
