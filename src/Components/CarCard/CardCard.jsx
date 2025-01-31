import React from 'react';
import { Card, Typography } from 'antd';
import './CarCard.css';  // Import the CSS file
import { useNavigate } from 'react-router-dom';

const { Text } = Typography;

export default function CarCard({ carData, routeId }) {
    const navigate = useNavigate();
    const handleCardClick = () => {
        navigate(`/car/${routeId}`);
    };

    return (
        <Card
            title={carData.model}
            className="car-card"
            onClick={handleCardClick}
            style={{ cursor: 'pointer' }}
        >
            <div style={{ marginBottom: '1rem' }}>
                <Text strong>Model:</Text> {carData.model}
            </div>
            <div style={{ marginBottom: '1rem' }}>
                <Text strong>Color:</Text> {carData.color}
            </div>
            <div>
                <Text strong>Number Plate:</Text> {carData.numberPlate}
            </div>
        </Card>
    );
}
