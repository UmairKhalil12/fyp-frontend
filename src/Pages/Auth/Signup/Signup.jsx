import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { SIGNUP_POST_METHOD } from '../../../api/api';

export default function Signup() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPass, setErrorPass] = useState(false);
    const [errorFname, setErrorFname] = useState(false);
    const [errorLname, setErrorLname] = useState(false);
    const [errorPhone, setErrorPhone] = useState(false);
    const [errorCountry, setErrorCountry] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        var errors = 0;
        if (email === '') {
            errors++;
            setErrorEmail(true);
        }

        if (pass === '') {
            errors++;
            setErrorPass(true);
        }

        if (fname === '') {
            errors++;
            setErrorFname(true);
        }

        if (lname === '') {
            errors++;
            setErrorLname(true);
        }

        if (phone === '') {
            errors++;
            setErrorPhone(true);
        }

        if (country === '') {
            errors++;
            setErrorCountry(true);
        }

        if (errors === 0) {
            const body = {
                username: `${fname + lname}`,
                password: pass,
                email: email,
                contact_number: phone,
                // last_name: "string",
                country: country
            }
            console.log(body);
            const link = 'http://localhost:8000/api/signup'
            try {
                const signup = await SIGNUP_POST_METHOD(link, JSON.stringify(body));
                console.log(signup, 'signup');
                if (signup.status === 201) {
                    toast.success("User Created Sucessfully");
                    setTimeout(() => {
                        navigate('/login');
                    }, 3000)

                }
                else if (signup.status > 200) {
                    toast.error(`${signup.data.detail}`);
                }
                else if (signup.status === 200) {
                    toast.success("signup successfull");
                    navigate('/login');
                }
            }

            catch (error) {
                console.error("signup error:", error);
                toast.error("An unexpected error occurred");
            }

        }
    }

    return (
        <div className="container-fluid p-0">
            <div className="row g-0 login-container">
                <div className="col-md-6 signup-image"></div>

                <div className="col-md-6 login-form-container">
                    <div className="login-form-inner">
                        <h3 className="login-form-heading">Signup</h3>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="fname" className="form-label">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    id="fname"
                                    name="fname"
                                    className={errorFname ? 'form-control input-error' : "form-control"}
                                    placeholder="Enter your First Name"
                                    value={fname}
                                    onChange={(e) => setFname(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="lname" className="form-label">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    id="lname"
                                    name="lname"
                                    className={errorLname ? 'form-control input-error' : "form-control"}
                                    placeholder="Enter your Last Name"
                                    value={lname}
                                    onChange={(e) => setLname(e.target.value)}
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
                                    className={errorEmail ? 'form-control input-error' : "form-control"}
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
                                    className={errorPhone ? 'form-control input-error' : "form-control"}
                                    placeholder="Enter your phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="country" className="form-label">
                                    Country
                                </label>
                                <input
                                    type="text"
                                    id="country"
                                    name="country"
                                    className={errorCountry ? 'form-control input-error' : "form-control"}
                                    placeholder="Enter your phone"
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
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
                                <button type="submit" className="btn btn-primary btn-login" onClick={handleSignup}>
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
