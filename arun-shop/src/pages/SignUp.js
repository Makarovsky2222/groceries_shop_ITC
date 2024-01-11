import React, { useState } from 'react';

import { signup, getUserID, logout } from '../services/Authentication.js'
import { addUser } from '../services/UserServices.js';
import './Styles/SignUp.css'

const SignUp = () => {
  const [formData, setFormData] = useState({
    uid: '',
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    phone_number: '',
    register_date: '',
    image_url: '',
    password: '',
    confirm_password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }; 

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password != formData.confirm_password) {
      alert("Password is not match!")
      return
    }

    formData.register_date = new Date(0).toString();

    const status = await signup(formData)
    if (status) {
      console.log('Form submitted:', formData);
    }
  };
  return (
    <div className="App">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleChange} required
          />
        </label>
        <br />
        <label>
          First name:
          <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} required
          />
        </label>
        <br />
        <label>
        lastname:
          <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} required
          />
        </label>
        <br />
        <label>
        email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required
          />
        </label>
        <br />
        <label>
        phone_number:
          <input type="text" name="phone_number" value={formData.phone_number} onChange={handleChange} required
          />
        </label>
        <br />
        <label>
        Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} required
          />
        </label>        
        <br />
        <label>
        confirm_password:
          <input type="password" name="confirm_password" value={formData.confirm_password} onChange={handleChange} required
          />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>

      <div>
        <button onClick={getUserID}>Me</button>
        <button onClick={logout}>Sign Out</button>
      </div>

    </div>
  );
}

export default SignUp;
