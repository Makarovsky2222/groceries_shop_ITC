// Login.js
import React, { useState, useEffect } from "react";
import "./Styling/Login.css";
import { login } from "../../services/Authentication";
import LoginCSS from '../LoginModule/Loginpage.module.css'

import { Link, useLocation } from "react-router-dom";
import backgroundlogo from "../../Resources/login-img/Login.png";
import loginimage from "../../Resources/login-img/image 1.png";

const Login = ({ isAuthenticated, setAuthenticated }) => {
  const location = useLocation();
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
  };

  const handleErrorClose = () => {
    setShowError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    login(formData.email, formData.password)
      .then(async (user) => {
        if (user) {
          console.log("User: ", user);
          setAuthenticated(true);
          setShowSuccess(true);
        }
      })
      .catch((error) => {
        console.error("Login Error: ", error);
        setShowError(true);
      });

    console.log("Login Data: ", formData);
  };

  useEffect(() => {
    if (location.pathname === "/login" || "/  ") {
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
    <form action="login">
     <div className={LoginCSS.wrapper}>
            <div className={LoginCSS.login}>
               <h1>LOGIN</h1>
            </div>
            <div className={LoginCSS.bottom}>
                <div className={LoginCSS.left}>
                    <img src={require('../../img/1.png')}></img>
                </div>
                <div className={LoginCSS.right}>
                    <div className={LoginCSS.inputbox}>
                        <input className={LoginCSS.input} type='email' name='email' placeholder='Email' value={formData.email} onChange={handleChange} required/>
                    </div>
                    <div className={LoginCSS.inputbox}>
                        <input type='password' name='password' placeholder='Password' value={formData.password} onChange={handleChange} required/>
                    </div>
                     <div className={LoginCSS.forgot}>
                        <a href='#'>Forgot password?</a>
                     </div>
                    <div className={LoginCSS.register}>
                        <p> Don't have an account?<a href="/signup">Register</a></p>
                        <button type='submit'>Login</button>
                    </div>
                </div>
            </div>
            
        </div>  

      {showSuccess && (
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          Login successful!
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
            onClick={handleSuccessClose}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )}

      {showError && (
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          Login failed. Please check your credentials.
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
            onClick={handleErrorClose}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )}
    </form>
  );
};

export default Login;
