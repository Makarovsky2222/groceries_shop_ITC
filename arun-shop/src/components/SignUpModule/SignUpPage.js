import React, { useState } from 'react';
import SignUpCSS from '../SignUpModule/SignUpPage.module.css'
import { signup } from '../../services/Authentication.js'

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
    <form action='login'>
         <div className={SignUpCSS.wrapper}>
            <div className={SignUpCSS.signup}>
                    <h1>Sign Up</h1>
            </div>
            <div className={SignUpCSS.all}>
                <div className={SignUpCSS.left}>
                    <img src={require('../../img/image 1.png')}></img>
                </div>
                <div className={SignUpCSS.right}>
                    <div className={SignUpCSS.inputbox}>
                        <input type='uid' name='uid' placeholder='UID'/>
                    </div>
                    <div className={SignUpCSS.name}>
                        <div className={SignUpCSS.inputbox1}>
                            <input type='F-name' name='F-name' placeholder='First Name'/>
                            <input type='L-name' name='L-name' placeholder='Last Name'/>
                        </div>
                    </div>
                    <div className={SignUpCSS.inputbox}>
                        <input type='email' name='email' placeholder='Email'/>
                    </div>
                    <div className={SignUpCSS.inputbox}>
                        <input type='ph-num' name='ph num' placeholder='Phone Number'/>
                    </div>
                    <div className={SignUpCSS.inputbox}>
                        <input type='password' name='password' placeholder='Password'/>
                    </div>
                    <div className={SignUpCSS.inputbox}>
                        <input type='con-pass' name='con-pass' placeholder='Confirm Password'/>
                    </div>
                    <div className={SignUpCSS.action}>
                        <p>Go back to <a href='/login'>Login</a></p>
                        <button type='submit'>Create Account</button>
                    </div>
            </div>
            </div>
            
        </div>
    </form>
  );
}

export default SignUp;
