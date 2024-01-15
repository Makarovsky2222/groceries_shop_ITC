// App.js
import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import History from "./pages/History";
import ProductList from "./pages/ProductList";
import Order from "./pages/Order";
import Navigation from "./components/Navigation";
import { Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Categories from "./pages/Categories";
import DateTime from "./components/DateModule/DateTime";

// testing route
import CateTest from "./pages/BackendTest/CateTest";
import ProdTest from "./pages/BackendTest/ProdTest";
import OrderTest from "./pages/BackendTest/OrderTest";

const App = () => {
  const [isAuthenticated, setAuthenticated] = useState(false);

  return (
    <Router>
      <div>
        <Navigation isAuthenticated={isAuthenticated} />
        <main>
          <DateTime />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Login
                  isAuthenticated={isAuthenticated}
                  setAuthenticated={setAuthenticated}
                />
              }
            />
            <Route exact path="/signup" element={<SignUp />} />
            <Route
              exact
              path="/login"
              element={
                <Login
                  isAuthenticated={isAuthenticated}
                  setAuthenticated={setAuthenticated}
                />
              }
            />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/order" element={<Order />} />
            <Route exact path="/categories" element={<Categories />} />
            <Route exact path="/history" element={<History />} />
            <Route exact path="/product" element={<ProductList />} />
            <Route exact path="/about" element={<SignUp />} />

            <Route exact path="/cateTest" element={<CateTest />} />
            <Route exact path="/prodTest" element={<ProdTest />} />
            <Route exact path="/orderTest" element={<OrderTest />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
