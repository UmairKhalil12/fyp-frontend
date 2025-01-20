import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css"

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row text-center text-md-start">
                    <div className="col-md-4 mb-3">
                        <h5>Car Detection</h5>
                        <p>
                            An advanced system to track car models and number plates across multiple cameras, predicting movement and mapping routes efficiently.
                        </p>
                    </div>

                    <div className="col-md-2 mb-2">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link to="/" className="text-decoration-none">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-decoration-none">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className="text-decoration-none"
                                >
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/services"
                                    className="text-decoration-none"
                                >
                                    Services
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-3 mb-2">
                        <h5>Contact Us</h5>
                        <ul className="list-unstyled">
                            <li>
                                <i className="bi bi-geo-alt"></i> Karachi, Pakistan
                            </li>
                            <li>
                                <i className="bi bi-envelope"></i> contact@car-detection.com
                            </li>
                            <li>
                                <i className="bi bi-phone"></i> +92 300 1234567
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-3 mb-3">
                        <h5>Created By</h5>
                        <ul className="list-unstyled">
                            <li>
                                <i className="bi bi-geo-alt"></i> Adeel Ahmed (B-20102010)
                            </li>
                            <li>
                                <i className="bi bi-envelope"></i> Syed Muaz Bin Salman (B-20102162)
                            </li>
                            <li>
                                <i className="bi bi-phone"></i> Mirza Muhammad Baqar Raza (B-20102069)
                            </li>
                            <li>
                                <i className="bi bi-phone"></i> Umair Khalil (B-20102179)
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="row rights-reserved">
                    <div className="col text-center mt-3">
                        <p className="mb-0">&copy; 2025 Car Detection. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
