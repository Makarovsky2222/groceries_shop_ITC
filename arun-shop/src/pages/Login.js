import React, { useState } from 'react';
import { login } from '../services/Authentication';


const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        login(formData.email, formData.password).then( async (user) => {
            if (user) {
                console.log("User: ", user)
            }
        })
    
        console.log("Login Data: ", formData)

        
    }

    return (
        <div className="App">
        <h1>Login Form</h1>
        <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
          <br />
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          <br />
          <button type="submit">Register</button>
        </form>
      </div>
    );
}

export default Login;