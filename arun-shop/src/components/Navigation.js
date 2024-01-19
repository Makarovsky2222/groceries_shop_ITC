import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../services/Authentication";
import "./Navigation.css";
import topLogo from "../Resources/logo/logo.svg";
import orderLogo from "../Resources/icons/order.svg";
import stockLogo from "../Resources/icons/stock.svg";
import historyLogo from "../Resources/icons/history.svg";
import categoryLogo from "../Resources/icons/categories.svg";
import logoutLogo from "../Resources/icons/logout.svg";

const Navigation = ({ isAuthenticated, setAuthenticated }) => {
  const [isReduced, setReduced] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is authenticated and navigate to /order
    if (
      isAuthenticated &&
      (window.location.pathname === "/login" ||
        window.location.pathname === "/")
    ) {
      navigate("/order");
    }
  }, [isAuthenticated, navigate]);

  const toggleNavbar = () => {
    setReduced(!isReduced);
  };

  const handleLogout = () => {
    // Call the logout function and clear the authentication status
    logout();
    setAuthenticated(false);
    navigate("/login");
    window.location.reload();
  };


  if (!isAuthenticated) {
    return navigate("/login");
  }

  return (
    <nav className={`navbar ${isReduced ? "reduced" : ""}`}>
      <div className="top-logo">
        <img src={topLogo} alt="Top Logo" />
      </div>
      <div className="category-pages">
        <ul>
          <div className="logo">
            <div className="toggle-btn" onClick={toggleNavbar}>
              {isReduced ? "+" : "-"}
            </div>
            {["order", "categories", "history", "stock"].map((page) => (
              <li key={page}>
                <Link to={`/${page}`}>
                  <img
                    src={icons[`${page}Logo`]}
                    alt={`${capitalize(page)} Logo`}
                  />
                  {!isReduced && (
                    <div className="textlogo">
                      <span>{capitalize(page)}</span>
                    </div>
                  )}
                </Link>
              </li>
            ))}
            {isAuthenticated && (
              <img
                className="logo"
                src={logoutLogo}
                alt="Logout"
                onClick={handleLogout}
                style={{ cursor: "pointer" }}
              />
            )}
          </div>
        </ul>
      </div>
    </nav>
  );
};

// Helper function to capitalize the first letter of a string
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

// Map of page names to their corresponding logos
const icons = {
  orderLogo,
  stockLogo,
  historyLogo,
  categoriesLogo: categoryLogo, // Assuming your icon is named "categoriesLogo"
};

export default Navigation;
