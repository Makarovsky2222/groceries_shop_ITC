// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Order from './pages/Order';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />

        <main>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/order" element={<Order />} />
            <Route exact path="/product" element={<ProductList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
