import React from "react";
import { Link } from "react-router-dom";
import { Layout, Row, Col, Typography, List } from "antd";
import {
    GithubOutlined,
    UserOutlined,
    MailOutlined,
    PhoneOutlined,
} from "@ant-design/icons";
import "./Footer.css";

const { Footer } = Layout;
const { Title, Text } = Typography;

export default function AppFooter() {
    return (
        <Footer className="footer">
            <div className="container">
                <Row gutter={[32, 32]} justify="center">
                    <Col xs={24} sm={12} md={6}>
                        <Title level={4} className="footer-title">Car Detection</Title>
                        <Text>
                            An advanced system to track car models and number plates across multiple cameras, predicting movement and mapping routes efficiently.
                        </Text>
                        <Text>Developed using YOLOv8, Python, Docker, React JS, and SQL.</Text>
                    </Col>

                    <Col xs={24} sm={12} md={4}>
                        <Title level={4} className="footer-title">Quick Links</Title>
                        <List>
                            <List.Item><Link to="/">Home</Link></List.Item>
                            <List.Item><Link to="/about">About Us</Link></List.Item>
                            <List.Item><Link to="/contact">Contact Us</Link></List.Item>
                            <List.Item><Link to="/services">Services</Link></List.Item>
                        </List>
                    </Col>

                    <Col xs={24} sm={12} md={6}>
                        <Title level={4} className="footer-title">Code Repositories</Title>
                        <List>
                            <List.Item>
                                <Link to='https://github.com/adeel-ahmed10/FYP-Car-Detection-Backend'>
                                    <GithubOutlined /> Backend (Python, Docker)
                                </Link>
                            </List.Item>
                            <List.Item>
                                <Link to='https://github.com/UmairKhalil12/fyp-frontend'>
                                    <GithubOutlined /> Frontend (React JS)
                                </Link>
                            </List.Item>
                        </List>
                    </Col>

                    <Col xs={24} sm={12} md={6}>
                        <Title level={4} className="footer-title">Developed By</Title>
                        <List>
                            <List.Item><UserOutlined /> Adeel Ahmed (B-20102010)</List.Item>
                            <List.Item><MailOutlined /> Syed Muaz Bin Salman (B-20102162)</List.Item>
                            <List.Item><PhoneOutlined /> Mirza Muhammad Baqar Raza (B-20102069)</List.Item>
                            <List.Item><PhoneOutlined /> Umair Khalil (B-20102179)</List.Item>
                        </List>
                    </Col>
                </Row>
            </div>
            <div className="rights-reserved">
                <Text style={{ color: '#fff' }}>&copy; 2025 Car Detection FYP. Developed at Karachi University (UBIT).</Text>
            </div>
        </Footer>
    );
}
