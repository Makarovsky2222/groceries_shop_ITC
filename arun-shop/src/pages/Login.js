// OrderPage.js
import React from "react";
import Loginpage from "../components/LoginModule/Loginpage";

const Login = ({ isAuthenticated, setAuthenticated }) => {
  return (
    <div>
      <Loginpage
        isAuthenticated={isAuthenticated}
        setAuthenticated={setAuthenticated}
      />
    </div>
  );
};

export default Login;
