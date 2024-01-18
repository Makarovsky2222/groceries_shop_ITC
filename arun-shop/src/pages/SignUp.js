import React, { useState } from "react";

import { signup, getUserID, logout } from "../services/Authentication.js";
import { addUser } from "../services/UserServices.js";
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

import loginimage from "../Resources/login-img/image 1.png";
import backgroundlogo from "../Resources/login-img/Login.png";
import "./Styles/SignUp.css";
import "../components/LoginModule/Styling/Login.css";

const SignUp = () => {
  const location = useLocation();

  const [formData, setFormData] = useState({
    uid: "",
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    phone_number: "",
    register_date: "",
    image_url: "",
    password: "",
    confirm_password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password != formData.confirm_password) {
      alert("Password doesn't match!");
      return;
    }

    formData.register_date = new Date(0).toString();

    const status = await signup(formData);
    if (status) {
      console.log("Form submitted:", formData);
    }
  };

  useEffect(() => {
    if (location.pathname === "/signup") {
      document.body.style.backgroundImage = `url(${backgroundlogo})`;
      document.body.style.backgroundPosition = "center";
      document.body.style.backgroundSize = "cover";
      document.body.style.minHeight = "100vh";
      document.body.style.marginRight = "230px";
    } else {
      document.body.style.background = "none";
      document.body.style.minHeight = "auto";
      document.body.style.marginRight = "0";
    }
    return () => {
      document.body.style.background = "none";
      document.body.style.minHeight = "auto";
      document.body.style.marginRight = "0";
    };
  }, [location.pathname]);

  return (
    <form onSubmit={handleSubmit} action="signup">
      <div className="wrapper">
        <div className="signup">
          <h1>REGISTER</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={loginimage} alt="Login Background" />
          </div>
          <div className="right">
            <div className="input-box">
              <label>
                <div className="input-text">
                  Username:
                  <input
                    className="input-text"
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </div>
              </label>
            </div>
            <div className="input-box">
              <label>
                <div className="input-text">
                  First name:
                  <input
                    className="input-text"
                    type="text"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    required
                  />
                </div>
              </label>
            </div>
            <div className="input-box">
              <label>
                <div className="input-text">
                  Last name:
                  <input
                    className="input-text"
                    type="text"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    required
                  />
                </div>
              </label>
            </div>
            <div className="input-box">
              <label>
                <div className="input-text">
                  Email:
                  <input
                    className="input-text"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </label>
            </div>
            <div className="input-box">
              <label>
                <div className="input-text">
                  Phone number:
                  <input
                    className="input-text"
                    type="text"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
                    required
                  />
                </div>
              </label>
            </div>
            <div className="input-box">
              <label>
                Password:
                <div className="input-text">
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
              </label>
            </div>
            <div className="input-box">
              <label>
                Confirm Password:
                <div className="input-text">
                  <input
                    type="password"
                    name="confirm_password"
                    value={formData.confirm_password}
                    onChange={handleChange}
                    required
                  />
                </div>
              </label>
            </div>
            <div className="login">
              <p>
                {" "}
                Already have an account?
                <a href="#">
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                </a>
              </p>
              <button type="submit">Register</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
