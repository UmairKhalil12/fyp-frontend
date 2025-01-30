import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import Logo from "../../assets/logo.png";
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../../store/userSlice';

export default function Navbar() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const userData = useSelector((state) => state.user.userData);

  const handleLogout = () => {
    dispatch(userLogout());
  };

  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg shadow">
      <Link className="navbar-brand d-flex align-items-center" to="/">
        <img
          src={Logo}
          alt="Car Detection Logo"
          className="navbar-logo"
        />
        <span className="ms-2">Car Detection</span>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className='container'>
        <div className="collapse navbar-collapse justify-content-center container" style={{ paddingBottom: '0.5rem' }} id="navbarNav">
          <ul className="navbar-nav text-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            {user && (
              <li className='nav-item'>
                <button className='nav-link' onClick={() => navigate('/upload')} >Upload Video</button>
              </li>
            )}
            {user && (
              <li className="nav-item user-item">
                <span className="nav-link">{`Hello, ${userData.name || 'User'}`}</span>
              </li>
            )}
            {user && (
              <li className="nav-item user-item">
                <button className="btn-outline-danger logout-btn" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
