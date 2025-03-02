import React from "react";
import { Link } from "react-router-dom";
import { Layout, Row, Col, Typography, List } from "antd";
import { CodeOutlined, DatabaseOutlined, ApiOutlined, CarOutlined } from '@ant-design/icons';
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
                            FYP Car Detection system, designed to detect and track vehicles using computer vision and machine learning. This service handles data processing, communication with cameras at multiple locations, and provides APIs for detecting car models, number plates, colors, and movement directions
                        </Text>
                    </Col>

                    <Col xs={24} sm={12} md={4}>
                        <Title level={4} className="footer-title">Quick Links</Title>
                        <List>
                            <List.Item><Link to="/">Home</Link></List.Item>
                            <List.Item><Link to="/about">About Us</Link></List.Item>
                            <List.Item><Link to="/upload">Upload Videos</Link></List.Item>
                        </List>
                    </Col>

                    <Col xs={24} sm={12} md={6}>
                        <Title level={4} className="footer-title">Technology Stack</Title>
                        <List>
                            <List.Item>
                                <CarOutlined style={{ marginRight: 8, color: '#1890ff' }} />
                                <Text>YOLOv10 (Python) for real-time vehicle detection</Text>
                            </List.Item>
                            <List.Item>
                                <ApiOutlined style={{ marginRight: 8, color: '#52c41a' }} />
                                <Text>NestJS for scalable and efficient backend architecture</Text>
                            </List.Item>
                            <List.Item>
                                <DatabaseOutlined style={{ marginRight: 8, color: '#faad14' }} />
                                <Text>PostgreSQL for robust and structured data management</Text>
                            </List.Item>
                            <List.Item>
                                <CodeOutlined style={{ marginRight: 8, color: '#722ed1' }} />
                                <Text>ReactJS for an interactive and responsive frontend</Text>
                            </List.Item>
                        </List>
                    </Col>

                    <Col xs={24} sm={12} md={6}>
                        <Title level={4} className="footer-title">Developed By</Title>
                        <List>
                            <List.Item><UserOutlined /> Adeel Ahmed (B-20102010)</List.Item>
                            <List.Item><UserOutlined /> Syed Muaz Bin Salman (B-20102162)</List.Item>
                            <List.Item><UserOutlined /> Mirza Muhammad Baqar Raza (B-20102069)</List.Item>
                            <List.Item><UserOutlined /> Umair Khalil (B-20102179)</List.Item>
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
