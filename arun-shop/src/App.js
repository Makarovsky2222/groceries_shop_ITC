// App.js
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Login from "./pages/Login";
import Home from "./pages/Home";

/**
 * The main App component for the groceries store website.
 *
 * @returns {JSX.Element} - The App component.
 */
const App = () => {
  return (
<Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/home">Home</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
