import React, { useState, useEffect } from "react";
import "./Styling/Login.css";
import "../LoginModule/Loginpage.css";
import { login } from "../../services/Authentication";
import { Link, useLocation } from "react-router-dom";
import backgroundlogo from "../../Resources/login-img/Login.png"
import loginimage from "../../Resources/login-img/image 1.png"

const Login = () => {
  const location = useLocation();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    login(formData.email, formData.password).then(async (user) => {
      if (user) {
        console.log("User: ", user);
      }
    });

    console.log("Login Data: ", formData);
  };

  useEffect(() => {
    // Apply background image style to body only when on the login page
    if (location.pathname === "/login") {
      console.log("True")
      document.body.style.backgroundImage = `url(${backgroundlogo})`;
      document.body.style.backgroundPosition = "center";
      document.body.style.backgroundSize = "cover";
      document.body.style.minHeight = "100vh";
      document.body.style.marginRight = "230px";
    } else {
      // Reset styles when leaving the login page
      document.body.style.background = "none";
      document.body.style.minHeight = "auto";
      document.body.style.marginRight = "0";
    }

    // Clean up the styles when the component unmounts
    return () => {
      document.body.style.background = "none";
      document.body.style.minHeight = "auto";
      document.body.style.marginRight = "0";
    };
  }, [location.pathname]);

  return (
    <form action="login">
      <div className="wrapper">
        <div className="login">
          <h1>LOGIN</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={loginimage} alt="Login Background" />
          </div>
          <div className="right">
            <div className="input-box">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-box">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="forgot">
              <a href="#">Forgot password?</a>
            </div>
            <div className="register">
              <p>
                {" "}
                Don't have an account?
                <a href="#">
                  <li>
                    <Link to="/signup">SignUp</Link>
                  </li>
                </a>
              </p>
              <button type="submit" onClick={handleSubmit}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
