import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../../../store/userSlice';
import { userInfo } from '../../../store/userSlice';
import { useDispatch } from 'react-redux';
import { LOGIN_POST_METHOD } from "../../../api/api"
import { toast } from 'react-toastify';

export default function Login() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [seatNumber, setSeatNumber] = useState('');

  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPass, setErrorPass] = useState(false);
  const [errorSeatNumber, setErrorSeatNumber] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    var errors = 0;
    // if (email === '') {
    //   errors++;
    //   setErrorEmail(true);
    // }

    if (pass === '') {
      errors++;
      setErrorPass(true);
    }

    if (seatNumber === '') {
      errors++;
      setErrorSeatNumber(true);
    }

    const link = `/auth/login`;

    const body = {
      seatNumber: seatNumber,
      password: pass
    }
    console.log(body, 'body');

    if (errors === 0) {
      try {
        const login = await LOGIN_POST_METHOD(link, JSON.stringify(body), dispatch);
        console.log(login, 'login page');

        if (login.status > 201) {
          toast.error(`${login.data.detail}`);
        }
        else if (login.status === 200 || login.status === 201) {
          toast.success("Logged in successfully");
          dispatch(userLogin(true));
          dispatch(userInfo(login.data))
          navigate('/home');
        }
      } catch (error) {
        console.error("Login error:", error);
        toast.error("An unexpected error occurred");
      }
    }

  };


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
                  className={errorEmail ? 'form-control input-error' : "form-control"}
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Seat Number
                </label>
                <input
                  type="seatnumber"
                  id="seatnumber"
                  name="seatnumber"
                  value={seatNumber}
                  onChange={(e) => setSeatNumber(e.target.value)}
                  className={errorSeatNumber ? 'form-control input-error' : "form-control"}
                  placeholder="Enter your seat number"
                  required
                />
              </div>

              <div className="mb-3 password-container">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <div className="input-group">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    className={errorPass ? 'form-control input-error' : "form-control"}
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
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
              </div>

              <div className="btn-login">
                <button type="submit" className="btn btn-primary btn-login" onClick={handleLogin}>
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
