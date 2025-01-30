import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css"

export default function Footer() {
    return (
        <>
            <footer>
                <div className="container-fluid">
                    <div className="row text-center text-md-start">
                        <div className="col-md-5 mb-4" >
                            <h5>Car Detection</h5>
                            <p>
                                An advanced system to track car models and number plates across multiple cameras, predicting movement and mapping routes efficiently.
                            </p>
                            <p>Developed using Yolov8 , python , dockers ,React JS and SQL</p>
                        </div>

                        <div className="col-md-2 mb-2">
                            <h5>Quick Links</h5>
                            <ul className="list-unstyled">
                                <li><Link to="/" className="text-decoration-none">Home</Link></li>
                                <li><Link to="/about" className="text-decoration-none">About Us</Link></li>
                                <li><Link to="/contact" className="text-decoration-none">Contact Us</Link></li>
                                <li><Link to="/services" className="text-decoration-none">Services</Link></li>
                            </ul>
                        </div>

                        <div className="col-md-2 mb-2">
                            <h5>Code</h5>
                            <ul className="list-unstyled">
                                <li><Link to='https://github.com/adeel-ahmed10/FYP-Car-Detection-Backend'><i className="bi bi-geo-alt"></i> Backend (python , Dockers)</Link></li>
                                <li><Link to='https://github.com/UmairKhalil12/fyp-frontend'><i className="bi bi-geo-alt"></i>Front-end (React JS)</Link></li>
                            </ul>
                        </div>

                        <div className="col-md-3 mb-3">
                            <h5>Developed By</h5>
                            <ul className="list-unstyled">
                                <li><i className="bi bi-geo-alt"></i> Adeel Ahmed (B-20102010)</li>
                                <li><i className="bi bi-envelope"></i> Syed Muaz Bin Salman (B-20102162)</li>
                                <li><i className="bi bi-phone"></i> Mirza Muhammad Baqar Raza (B-20102069)</li>
                                <li><i className="bi bi-phone"></i> Umair Khalil (B-20102179)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="row rights-reserved">
                <p >&copy; 2025 Car Detection FYP. Developed at Karachi University (UBIT).</p>
            </div>
        </>

    );
}
