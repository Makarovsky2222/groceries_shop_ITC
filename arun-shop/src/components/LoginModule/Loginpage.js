import React, { useState, useEffect } from "react";
import "./Styling/Login.css";
import { login } from "../../services/Authentication";
import LoginCSS from "../LoginModule/Loginpage.module.css";
import backgroundlogo from "../../Resources/login-img/Login.png";
import { useLocation } from "react-router-dom";
import img1 from "../../img/1.png";

const Login = ({ isAuthenticated, setAuthenticated }) => {
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

    if (formData.email && formData.password) {
      login(formData.email, formData.password)
        .then(async (user) => {
          if (user) {
            console.log("User: ", user);
            setAuthenticated(true);
          }
        })
        .catch((error) => {
          console.error("Login Error: ", error);
        });
    } else {
      console.error("Please enter both email and password.");
    }
  };

  const applyBackgroundStyles = () => {
    const bodyStyle = document.body.style;

    if (location.pathname === "/login" || location.pathname === "/") {
      bodyStyle.backgroundImage = `url(${backgroundlogo})`;
      bodyStyle.backgroundPosition = "center";
      bodyStyle.backgroundSize = "cover";
      bodyStyle.minHeight = "100vh";
      bodyStyle.marginRight = "230px";
    } else {
      bodyStyle.background = "none";
      bodyStyle.minHeight = "auto";
      bodyStyle.marginRight = "0";
    }
  };

  useEffect(() => {
    applyBackgroundStyles();
    return () => {
      document.body.style.background = "none";
      document.body.style.minHeight = "auto";
      document.body.style.marginRight = "0";
    };
  }, [location.pathname]);

  return (
    <form action="login">
      <div className={LoginCSS.wrapper}>
        <div className={LoginCSS.login}>
          <h1>LOGIN</h1>
        </div>
        <div className={LoginCSS.bottom}>
          <div className={LoginCSS.left}>
            <img src={img1} alt="Image 1" />
          </div>
          <div className={LoginCSS.right}>
            <div className={LoginCSS.inputbox}>
              <input
                className={LoginCSS.input}
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={LoginCSS.inputbox}>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className={LoginCSS.forgot}>
              <a href="#">Forgot password?</a>
            </div>
            <div className={LoginCSS.register}>
              <p>
                Don't have an account? <a href="/signup">Register</a>
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
