import { useSelector } from "react-redux";
import { GET_METHOD } from "../../../api/api";
import "./HomePageContent.css";
import React, { useEffect, useState } from 'react';
import CarCard from "../../../Components/CarCard/CardCard";

export default function HomePageContent() {
    const [routeData, setRouteData] = useState([]);
    const auth = useSelector((state) => state.user.userData);

    useEffect(() => {
        const fetchRoutes = async () => {
            const route = await GET_METHOD('/getRoutes', auth)
            setRouteData(route);
        }
        fetchRoutes();
    }, [auth]);

    return (
        <div className="main-home-page-content">
            <div className="home-page-content">
                <div className="car-card-div">
                    {routeData?.map((car) => (
                        <CarCard key={car.id} carData={car.Car} routeId={car.routeId} />
                    ))}
                </div>
            </div>
        </div>
    );
}
