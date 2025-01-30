import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../../store/userSlice";
import { userInfo } from "../../../store/userSlice";
import { useDispatch } from "react-redux";
import { LOGIN_POST_METHOD } from "../../../api/api";
import { toast } from "react-toastify";
import { Button, Form, Input, notification, Radio } from "antd";
import { requiredRule } from "../../../utils/helper";

export default function Login() {
  const { form } = Form.useForm();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPass, setErrorPass] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    var errors = 0;
    if (email === "") {
      errors++;
      setErrorEmail(true);
    }

    if (pass === "") {
      errors++;
      setErrorPass(true);
    }

    const link = `/api/login`;

    const body = {
      email: email,
      password: pass,
    };
    console.log(body, "body");

    if (errors === 0) {
      try {
        const login = await LOGIN_POST_METHOD(link, JSON.stringify(body), dispatch);
        console.log(login, "login");

        if (login.status > 200) {
          toast.error(`${login.data.detail}`);
        } else if (login.status === 200) {
          toast.success("Logged in successfully");
          dispatch(userLogin(true));
          dispatch(userInfo(login.data));
          navigate("/home");
        }
      } catch (error) {
        console.error("Login error:", error);
        toast.error("An unexpected error occurred");
      }
    }
  };

  const onFinish = async (values) => {
    try {
      const body = {
        ...values,
      };
      const link = `/auth/login`;
      console.log("Values are", body);
      const login = await LOGIN_POST_METHOD(link, JSON.stringify(body), dispatch);
      console.log(login, "login");

      if (login.status === 201) {
        toast.success("Logged in successfully");
        notification.success({
          message: "logged In!",
        });
        dispatch(userLogin(true));
        dispatch(userInfo(login.data));
        navigate("/home");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("An unexpected error occurred");
    }
  };

  return (
    <div className="container-fluid p-0">
      <div className="row g-0 login-container">
        <div className="col-md-6 login-image"></div>

        <div className="col-md-6 login-form-container">
          <div className="login-form-inner">
            {/* <h3 className="login-form-heading">Login</h3> */}
            <Form form={form} onFinish={onFinish} layout="vertical" className="">
              <h2 className="text-2xl font-semibold text-center mb-4 text-gray-700">Login</h2>

              <div className="space-y-4">
                <Form.Item rules={requiredRule} name="seatNumber" label="KU Seat Number" className="font-medium text-gray-700">
                  <Input className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="B#00000000" />
                </Form.Item>

                <Form.Item rules={requiredRule} name="password" label="Password" className="font-medium text-gray-700">
                  <Input.Password className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="Enter your password" />
                </Form.Item>
              </div>

              <Button htmlType="submit" block className="btn-login">
                Login
              </Button>

              <p className="text-center text-gray-500 text-sm mt-3">
                Don’t have an account?{" "}
                <a href="/signup" className="text-blue-600 hover:underline">
                  Register
                </a>
              </p>
            </Form>

            {/* <form>

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
            </form> */}
          </div>
        </div>
      </div>
    </div>
  );
}
