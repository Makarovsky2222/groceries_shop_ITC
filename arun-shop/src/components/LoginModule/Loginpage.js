import React, { useState } from "react";
import "./Styling/Login.css";
import "../LoginModule/Loginpage.css";
import { login } from "../../services/Authentication";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { RiLockPasswordFill } from "react-icons/ri";

const Login = () => {
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

  return (
    <form action="login">
      <div className="wrapper">
        <div className="login">
          <h1>LOGIN</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={require("../../img/image 1.png")}></img>
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
              <button type="submit">Login</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
