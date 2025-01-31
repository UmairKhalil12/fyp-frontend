import React, { useEffect, useState } from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import HomePageContent from '../HomePageContent/HomePageContent';
import Footer from '../../../Components/Footer/Footer';
import SideFilterBar from '../../../Components/SideFilterBar/SideFilterBar';
import './HomePage.css';
import { GET_METHOD, GET_METHOD_2 } from '../../../api/api';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

export default function HomePage() {
    const [routeData, setRouteData] = useState([]);
    const auth = useSelector((state) => state.user.userData);
    console.log(auth, 'auth');

    const [filters, setFilters] = useState({
        timeStamp: null,
        model: null,
        numberPlate: null,
        color: null
    });

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    };

    useEffect(() => {
        const fetchRoutesWithFilters = async () => {
            try {
                let response;
                if (Object.values(filters).some(filter => filter !== null)) {
                    console.log(filters, 'filters');
                    response = await GET_METHOD_2("/getRoutes", auth, filters);
                    toast.success('Filter applied successfully');
                } else {
                    response = await GET_METHOD('/getRoutes', auth);
                }
                setRouteData(response);
            } catch (error) {
                console.error("Error fetching routes:", error);
                toast.error("Failed to fetch routes");
            }
        };

        fetchRoutesWithFilters();
    }, [filters, auth]);

    return (
        <div className="main-home-page">
            <Navbar />
            <div className='filter-bar-content-div'>
                <SideFilterBar
                    onFilterChange={handleFilterChange}
                    setFilters={setFilters}
                />
                <HomePageContent routeData={routeData} />
            </div>
            <Footer />
        </div>
    );
}
