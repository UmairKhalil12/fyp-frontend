import React, { useEffect, useState } from 'react';
import { Typography, Tag } from 'antd';
import { POST_METHOD } from '../../api/api';
import { useSelector } from 'react-redux';
import Map from "../Map/Map";

const { Title, Text } = Typography;

export default function SingleCarPageContent({ routeId }) {
    const [routeData, setRouteData] = useState([]);
    const auth = useSelector((state) => state.user.userData);
    const body = { routeId: parseInt(routeId) };

    useEffect(() => {
        const fetchCompleteRoutes = async () => {
            const res = await POST_METHOD('/getRouteById', auth, JSON.stringify(body));
            setRouteData(res);
        };
        fetchCompleteRoutes();
    }, [auth, routeId]);

    // Extracting useful data
    const entryTime = routeData.length > 0 ? new Date(routeData[0]?.createdAt).toLocaleString() : "";
    const exitTime = routeData.length > 0 ? new Date(routeData[routeData.length - 1]?.createdAt).toLocaleString() : "";
    const routeStatus = routeData.length > 0 ? routeData[routeData.length - 1]?.routeStatus : "";
    const carData = routeData.length > 0 ? routeData[0]?.Car : {};

    // Extracting coordinates for map
    const source = routeData.length > 0 ? {
        lat: routeData[0]?.Camera?.lat,
        lng: routeData[0]?.Camera?.lng
    } : null;
    const destination = routeData.length > 0 ? {
        lat: routeData[routeData.length - 1]?.Camera?.lat,
        lng: routeData[routeData.length - 1]?.Camera?.lng
    } : null;

    console.log(routeData, 'routeData single car page content')

    return (
        <div style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto' }}>
            <Title level={2}>Car Route Details</Title>

            <div style={{ marginBottom: '20px' }}>
                <Text strong>Entry Time:</Text> {entryTime}
            </div>
            <div style={{ marginBottom: '20px' }}>
                <Text strong>Exit Time:</Text> {exitTime}
            </div>
            <div style={{ marginBottom: '20px' }}>
                <Text strong>Status:</Text>
                {routeStatus && (
                    <Tag color={routeStatus === "PENDING" ? "orange" : "green"} style={{ marginLeft: '8px' }}>
                        {routeStatus}
                    </Tag>
                )}
            </div>

            {carData && (
                <div style={{ marginBottom: '20px' }}>
                    <Text strong>Car Details:</Text>
                    <div><Text>Model: {carData.model}</Text></div>
                    <div><Text>Number Plate: {carData.numberPlate}</Text></div>
                    <div><Text>Color: {carData.color}</Text></div>
                </div>
            )}

            {source && destination && (
                <div style={{ marginTop: '30px' }}>
                    <Map source={source} destination={destination} />
                </div>
            )}
        </div>
    );
}
