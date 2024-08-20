import React, { useState } from 'react';
import './login.css';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-page">
      <div className="login-container">
        <img src="*" alt="WordPress Logo" className="logo" />
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username or Email Address</label>
            <input type="text" id="username" name="username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-input">
              <input 
                type={showPassword ? "text" : "password"} 
                id="password" 
                name="password" 
              />
              <button 
                type="button" 
                className="show-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "hide" : "show"}
              </button>
            </div>
          </div>
          <div className="form-group checkbox">
            <input type="checkbox" id="remember" name="remember" />
            <label htmlFor="remember">Remember Me</label>
          </div>
          <button type="submit" className="login-button">Log In</button>
        </form>
      </div>
      <p className="lost-password"><a href="*">Lost your password?</a></p>
      <p className="back-link">← Go to Homepage</p>
    </div>
  );
};

export default LoginPage;