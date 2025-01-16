import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        {/* Brand Logo */}
        <a className="navbar-brand text-primary fw-bold" href="/">
          Car Detection
        </a>

        {/* Toggle Button for Small Screens */}
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

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <p className="nav-link" >
                Home
              </p>
            </li>
            <li className="nav-item">
              <p className="nav-link">
                Products
              </p>
            </li>
            <li className="nav-item">
              <p className="nav-link">
                About Us
              </p>
            </li>
            <li className="nav-item">
              <p className="nav-link" >
                Contact Us
              </p>
            </li>
            <li className="nav-item dropdown">
              <p
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </p>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <p className="dropdown-item" >
                    Service 1
                  </p>
                </li>
                <li>
                  <p className="dropdown-item" >
                    Service 2
                  </p>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <p className="dropdown-item" >
                    Service 3
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
