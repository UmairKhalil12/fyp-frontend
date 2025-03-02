import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Typography, message } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogin, userData } from '../../../store/userSlice';
import { LOGIN_POST_METHOD } from '../../../api/api';
import './Login.css'; // Custom CSS for additional styling

const { Title } = Typography;

export default function Login() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (values) => {
    setLoading(true);
    const { seatNumber, password } = values;

    const link = `/auth/login`;
    const body = { seatNumber, password };

    try {
      const login = await LOGIN_POST_METHOD(link, JSON.stringify(body), dispatch);
      if (login.status > 201) {
        message.error(login.data.detail || 'Login failed');
      } else if (login.status === 200 || login.status === 201) {
        message.success('Logged in successfully');
        dispatch(userLogin(true));
        dispatch(userData(login.data));
        navigate('/home');
      }
    } catch (error) {
      console.error('Login error:', error);
      message.error('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-image" />
      <div className="login-form-container">
        <div className="login-form-inner">
          <Title level={2} className="login-form-heading">
            Login
          </Title>
          <Form form={form} onFinish={handleLogin} layout="vertical">
            <Form.Item
              name="seatNumber"
              label="Seat Number"
              rules={[{ required: true, message: 'Please enter your seat number' }]}
            >
              <Input placeholder="Enter your seat number" />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[{ required: true, message: 'Please enter your password' }]}
            >
              <Input.Password
                placeholder="Enter your password"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                loading={loading}
                className="login-form-button"
              >
                Login
              </Button>
            </Form.Item>

            <div className="signup-para-login">
              Don't have an account?{' '}
              <span className="signup-link" onClick={() => navigate('/signup')}>
               <b>Signup</b> 
              </span>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}