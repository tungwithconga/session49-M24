import React from 'react';
import './Register.css';

const Register = () => {
  return (
    <div className="register-container">
      <h2>Register</h2>
      <form>
        <div className="form-group">
          <label htmlFor="Email">Email:</label>
          <input type="text" id="Email" name="Email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">ConfirmPassWord:</label>
          <input type="password" id="confirm-password" name="confirm-password" />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
