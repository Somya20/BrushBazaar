import React from 'react';
import './Register.css'; // Import a CSS file if you want to add styles

const Register = () => {
  return (
    <div className="register-container">
      <h1>Registration Form</h1>  
      <form className="registration-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        
        <label htmlFor="password">Password:</label>
        <input type="password" id="email" name="password" required />

        <label htmlFor="Mob">Mobile No:</label>
        <input type="Mob" id="Mob" name="Mob" required />
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;