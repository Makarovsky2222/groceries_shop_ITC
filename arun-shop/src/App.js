// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import History from './pages/History';
import ProductList from './pages/ProductList';
import Order from './pages/Order';
import Navigation from './components/Navigation';
import Login from './pages/Login';
import About from './pages/About';

// testing route
import CateTest from './pages/BackendTest/CateTest'
import ProdTest from './pages/BackendTest/ProdTest';

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/order" element={<Order />} />
            <Route exact path="/history" element={<History />} />
            <Route exact path="/product" element={<ProductList />} />
            <Route exact path="/about" element={<SignUp />} />

            <Route exact path="/cateTest" element={<CateTest />} />
            <Route exact path="/prodTest" element={<ProdTest />} />

          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
