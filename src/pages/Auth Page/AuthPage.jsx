import React, { useState } from 'react';
import './LoginForm.css'; // Assuming you have a separate CSS file for styling

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="login">
    <div className="container">
      <h2 id="frm-head">{isLogin ? "Log In" : "Sign Up"}</h2>
      <form action="#22">
        <div className="inputbox">
          {!isLogin && (
            <input
              type="text"
              placeholder="Username"
              required
              name="usrnme"
              id="usrname"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            required
            name="mail"
            id="prsn-mail"
          />
          <input
            type="password"
            placeholder="Password"
            required
            name="pswrd"
            id="pswusr"
          />
          <p
            className="password-warning"
            id="wrnps"
            style={{ color: isLogin ? "blue" : "#ff4d4d" }}
          >
            {isLogin ? "Forgot Password" : "! Enter Strong Password"}
          </p>
        </div>
        <button type="submit" id="btn-main">
          {isLogin ? "Log In" : "Sign Up"}
        </button>
        <div className="icon-container">
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-google"></i></a>
          <a href="#"><i className="fab fa-facebook-f"></i></a>
        </div>
        <div className="footer">
          <p id="preuser">
            {isLogin ? "Don't have an account" : "Already have an account?"}
          </p>
          <a href="#27" onClick={handleToggle} id="logingtitile_change">
            {isLogin ? "Sign Up" : "Log In"}
          </a>
        </div>
      </form>
    
      </div></div>
  );
};

export default AuthPage;
