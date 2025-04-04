import React, { useState } from 'react';
import { Form, Input, Button, Typography, message, Row, Col } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { SIGNUP_POST_METHOD } from '../../../api/api';
import './Signup.css'; // Custom CSS for additional styling

const { Title } = Typography;

export default function Signup() {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSignup = async (values) => {
        setLoading(true);
        const { email, password, firstName, lastName, phone, country, seatNumber } = values;
        console.log("nsakdbabdsbajkdbjka")

        const body = {
            email,
            password,
            seatNumber,
            userName: `${firstName} ${lastName}`,
        };

        const link = '/auth/signup';

        try {
            const signup = await SIGNUP_POST_METHOD(link, JSON.stringify(body));
            if (signup.status === 201) {
                message.success('User created successfully');
                setTimeout(() => {
                    navigate('/login');
                }, 3000);
            } else if (signup.status > 200) {
                message.error(signup.data.detail || 'Signup failed');
            } else if (signup.status === 200 || signup.sucess === 201) {
                message.success('Signup successful');
                navigate('/login');
            }
        } catch (error) {
            console.error('Signup error:', error);
            message.error('An unexpected error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-image" />
            <div className="signup-form-container">
                <div className="signup-form-inner">
                    <Title level={2} className="signup-form-heading">
                        Signup
                    </Title>
                    <Form form={form} onFinish={handleSignup} layout="vertical">
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    name="firstName"
                                    label="First Name"
                                    rules={[{ required: true, message: 'Please enter your first name' }]}
                                >
                                    <Input placeholder="Enter your first name" />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    name="lastName"
                                    label="Last Name"
                                    rules={[{ required: true, message: 'Please enter your last name' }]}
                                >
                                    <Input placeholder="Enter your last name" />
                                </Form.Item>
                            </Col>
                        </Row>


                        <Form.Item
                            name="email"
                            label="Email Address"
                            rules={[
                                { required: true, message: 'Please enter your email' },
                                { type: 'email', message: 'Please enter a valid email' },
                            ]}
                        >
                            <Input placeholder="Enter your email" />
                        </Form.Item>

                        <Form.Item
                            name="seatNumber"
                            label="Seat Number"
                            rules={[{ required: true, message: 'Please enter your seat number' }]}
                        >
                            <Input placeholder="Enter your seat number" />
                        </Form.Item>



                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    name="phone"
                                    label="Phone"
                                    rules={[{ required: true, message: 'Please enter your phone number' }]}
                                >
                                    <Input placeholder="Enter your phone number" />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    name="country"
                                    label="Country"
                                    rules={[{ required: true, message: 'Please enter your country' }]}
                                >
                                    <Input placeholder="Enter your country" />
                                </Form.Item>
                            </Col>
                        </Row>

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
                                className="signup-form-button"
                            >
                                Signup
                            </Button>
                        </Form.Item>

                        <div className="signup-para-login">
                            Already have an account?{' '}
                            <span className="signup-link" onClick={() => navigate('/login')}>
                               <b>Login</b> 
                            </span>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}