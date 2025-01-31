import React, { useEffect, useState } from 'react';
import { Typography, Tag, Descriptions } from 'antd';
import { POST_METHOD } from '../../api/api';
import { useSelector } from 'react-redux';
import Map from "../Map/Map"; // Make sure the path is correct

const { Title, Text } = Typography;
const { Item } = Descriptions;

export default function SingleCarPageContent({ routeId }) {
    const [routeData, setRouteData] = useState([]);
    const [loadingRoute, setLoadingRoute] = useState(true); // Add loading state
    const auth = useSelector((state) => state.user.userData);
    const body = { routeId: parseInt(routeId) };

    useEffect(() => {
        const fetchCompleteRoutes = async () => {
            try {
                const res = await POST_METHOD('/getRouteById', auth, JSON.stringify(body));
                setRouteData(res);
            } catch (error) {
                console.error("Error fetching route data:", error);
            } finally {
                setLoadingRoute(false);
            }
        };

        if (routeId) {
            fetchCompleteRoutes();
        } else {
            setLoadingRoute(false); // Handle no routeId case
        }
    }, [auth, routeId]);

    const entryTime = routeData.length > 0 ? new Date(routeData[0]?.createdAt).toLocaleString() : "";
    const exitTime = routeData.length > 0 ? new Date(routeData[routeData.length - 1]?.createdAt).toLocaleString() : "";
    const routeStatus = routeData.length > 0 ? routeData[routeData.length - 1]?.routeStatus : "";
    const carData = routeData.length > 0 ? routeData[0]?.Car : {};

    const waypoints = routeData.map(route => ({
        lat: route?.Camera?.lat,
        lng: route?.Camera?.lng
    })).filter(point => point && point.lat && point.lng); // Filter invalid points

    return (
        <div style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto' }}>
            <Title level={2}>Car Route Details</Title>

            {loadingRoute ? (
                <p>Loading route details...</p>
            ) : (
                <>
                    <Descriptions title="Car Details" bordered>
                        <Item label="Model">{carData?.model || "N/A"}</Item>
                        <Item label="Number Plate">{carData?.numberPlate || "N/A"}</Item>
                        <Item label="Color">{carData?.color || "N/A"}</Item>
                    </Descriptions>

                    <Descriptions title="Route Details" bordered style={{ marginTop: '20px' }}>
                        <Item label="Entry Time">{entryTime || "N/A"}</Item>
                        <Item label="Exit Time">{exitTime || "N/A"}</Item>
                        <Item label="Status">
                            {routeStatus ? (
                                <Tag color={routeStatus === "PENDING" ? "orange" : "green"}>
                                    {routeStatus}
                                </Tag>
                            ) : (
                                "N/A"
                            )}
                        </Item>
                        {/* You can add other Route details here */}
                    </Descriptions>

                    {waypoints.length > 1 ? ( // Show map only if there are at least 2 waypoints
                        <div style={{ marginTop: '30px' }}>
                            <Map waypoints={waypoints} />
                        </div>
                    ) : (
                        <p>{routeData.length === 0 ? "No route data available." : "Not enough location data to display the route."}</p>
                    )}
                </>
            )}
        </div>
    );
}