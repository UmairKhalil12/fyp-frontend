import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // const navigate = useNavigate(); 

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();

  return (
    <div className="container-fluid p-0">
      <div className="row g-0 login-container">
        <div className="col-md-6 login-image">
        </div>

        <div className="col-md-6 login-form-container">
          <div className="login-form-inner">
            <h3 className="login-form-heading">Login</h3>
            <form>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Password Input */}
              <div className="mb-3 password-container">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <div className="input-group">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter your password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="btn btn-outline-secondary toggle-password"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? 'Hide' : 'Show'} {/* Toggle text */}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <div className="btn-login">
                <button type="submit" className="btn btn-primary btn-login" onClick={() => navigate('/home')}>
                  Login
                </button>
              </div>
              <p className='signup-para-login'>Don't have an account? <span className='signup-link' onClick={() => navigate('/signup')} > Signup</span></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
