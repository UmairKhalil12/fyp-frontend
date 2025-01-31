import React from 'react';
import { Typography, Row, Col, Card } from 'antd';

const { Title, Paragraph } = Typography;

export default function AboutPageContent() {
    return (
        <div style={{ padding: '24px' }}>
            <Row justify="center">
                <Col xs={24} sm={22} md={20} lg={18} xl={16}>
                    <Title level={2} style={{ textAlign: 'center', marginBottom: '24px' }}>
                        About Our Project
                    </Title>
                    <Paragraph style={{ textAlign: 'justify', fontSize: '16px', lineHeight: '1.8' }}>
                        Welcome to the <strong>FYP Car Detection and Tracking System</strong>, a Final Year Project designed to detect vehicles and monitor their entry and exit in a specific area using advanced computer vision and machine learning technologies. This project focuses on providing a reliable and efficient solution for identifying cars, tracking their movements, and recording their entry and exit times.
                    </Paragraph>
                    <Paragraph style={{ textAlign: 'justify', fontSize: '16px', lineHeight: '1.8' }}>
                        At the core of our system is <strong>YOLOv8</strong>, a state-of-the-art object detection model implemented in Python. YOLOv8 enables real-time and accurate detection of vehicles, making it ideal for applications requiring high precision and speed. The backend of our system is built using <strong>NestJS</strong>, a scalable and efficient framework that ensures seamless communication with cameras and handles data processing efficiently. For structured and reliable data management, we utilize <strong>SQL</strong>, ensuring that all vehicle-related data is stored securely and can be retrieved for analysis. On the frontend, we leverage <strong>ReactJS</strong> to create an interactive and user-friendly interface, allowing users to easily interact with the system and visualize the results.
                    </Paragraph>
                    <Title level={4} style={{ marginTop: '24px', marginBottom: '16px' }}>
                        Project Objectives
                    </Title>
                    <Paragraph style={{ textAlign: 'justify', fontSize: '16px', lineHeight: '1.8' }}>
                        The primary objective of this project is to develop a system that can:
                    </Paragraph>
                    <ul style={{ textAlign: 'justify', fontSize: '16px', lineHeight: '1.8', paddingLeft: '24px' }}>
                        <li>Detect vehicles in real-time using computer vision and machine learning.</li>
                        <li>Track the entry and exit of vehicles in a specific area.</li>
                        <li>Record and store vehicle data, including timestamps and movement directions.</li>
                        <li>Provide a user-friendly interface for monitoring and analyzing vehicle activity.</li>
                    </ul>
                    <Title level={4} style={{ marginTop: '24px', marginBottom: '16px' }}>
                        Technologies Used
                    </Title>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} sm={12} md={8}>
                            <Card title="YOLOv8" bordered={false}>
                                YOLOv8 is used for real-time vehicle detection, providing high accuracy and speed in identifying vehicles from video streams.
                            </Card>
                        </Col>
                        <Col xs={24} sm={12} md={8}>
                            <Card title="NestJS" bordered={false}>
                                NestJS powers the backend, ensuring scalability, efficiency, and seamless communication with cameras and APIs.
                            </Card>
                        </Col>
                        <Col xs={24} sm={12} md={8}>
                            <Card title="ReactJS" bordered={false}>
                                ReactJS is used to build an interactive and responsive frontend, offering a seamless user experience.
                            </Card>
                        </Col>
                    </Row>
                    <Title level={4} style={{ marginTop: '24px', marginBottom: '16px' }}>
                        Why This Project?
                    </Title>
                    <Paragraph style={{ textAlign: 'justify', fontSize: '16px', lineHeight: '1.8' }}>
                        This project addresses the need for an automated system to detect and track vehicles in specific areas, such as parking lots, private properties, or restricted zones. By leveraging advanced technologies like YOLOv8, NestJS, and ReactJS, we aim to provide a solution that is not only accurate and efficient but also easy to use and scalable for future enhancements.
                    </Paragraph>
                    <Paragraph style={{ textAlign: 'justify', fontSize: '16px', lineHeight: '1.8', marginTop: '24px' }}>
                        We are committed to delivering a system that meets the needs of our users and demonstrates the potential of computer vision and machine learning in solving real-world problems. Whether it's for security, monitoring, or data analysis, our FYP Car Detection and Tracking System is designed to make a difference.
                    </Paragraph>
                </Col>
            </Row>
        </div>
    );
};