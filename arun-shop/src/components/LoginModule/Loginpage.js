import React, { useState } from 'react';
import './Styling/Login.css'
import '../LoginModule/Loginpage.css'
import { login } from '../../services/Authentication';

import { CgProfile } from "react-icons/cg";
import { RiLockPasswordFill } from "react-icons/ri";


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
        <div className='wrapper'>
          <form action=''>
            <h1> LOGIN</h1>
            <div className='input-box'>
                <input type='email' name='email' placeholder='Email' value={formData.email} onChange={handleChange} required/>
            </div>
            <div className='input-box'>
                <input type='password' name='password' placeholder='Password' value={formData.password} onChange={handleChange} required/>
            </div>
            <div className='forgot'>
              <a href='#'>Forgot password?</a>
            </div>
            <button type='submit'>Login</button>
            <div className='register'>
              <p> Don't have an account? <a href="#">Register</a></p>
            </div>
          </form>
        </div>
    );
}

export default Login;