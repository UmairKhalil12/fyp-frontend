import React from 'react';
import loginImage from "../../../assets/login4.jpg"; // Your image path here
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'; // Import custom stylesheet

export default function LoginScreen() {
  return (
    <div className="login-container" style={{ backgroundImage: `url(${loginImage})` }}>
      {/* Login Form */}
      <div className="login-form-inner">
        <h3 className="login-form-heading">Welcome Back</h3>
        <form>
          {/* Email Input */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit Button */}
          <div className="btn-login">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
