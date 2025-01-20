import React, { useState } from 'react';
// import SideFilterBar from '../../../Components/SideFilterBar/SideFilterBar';
import Navbar from '../../../Components/Navbar/Navbar';
import HomePageContent from '../HomePageContent/HomePageContent';
import Footer from '../../../Components/Footer/Footer';
import SideFilterBar from '../../../Components/SideFilterBar/SideFilterBar';
import './HomePage.css';

export default function HomePage() {
    const [filters, setFilters] = useState({
        color: '',
        TimeStamp: '',
        Car: ''
    });

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    };
    return (
        <div>
            <Navbar />
            <div className='filter-bar-content-div'>
                <SideFilterBar
                    onFilterChange={handleFilterChange}
                    setFilters={setFilters}
                />
                <HomePageContent />
            </div>
            <Footer />
        </div>
    );
}