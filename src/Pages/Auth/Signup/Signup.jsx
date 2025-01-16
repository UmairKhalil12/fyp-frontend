import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Signup.css';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const navigate = useNavigate();

    return (
        <div className="container-fluid p-0">
            <div className="row g-0 login-container">
                <div className="col-md-6 signup-image"></div>

                <div className="col-md-6 login-form-container">
                    <div className="login-form-inner">
                        <h3 className="login-form-heading">Signup</h3>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="form-control"
                                    placeholder="Enter your Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>

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
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className="form-control"
                                    placeholder="Enter your phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                />
                            </div>

                            {/* Password Input with Toggle */}
                            <div className="mb-3 password-container">
                                <label htmlFor="password" className="form-label">
                                    Password
                                </label>
                                <div className="input-group">
                                    <input
                                        type={showPassword ? 'text' : 'password'} // Toggle input type
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
                                <button type="submit" className="btn btn-primary btn-login">
                                    Signup
                                </button>
                            </div>
                            <p className="signup-para-login">
                                Already have an account? <span className="signup-link" onClick={() => navigate('/login')}>Login</span>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
