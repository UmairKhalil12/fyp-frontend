import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import AppFooter from '../../Components/Footer/Footer';
import SingleCarPageContent from '../../Components/SingleCarPageContent/SingleCarPageContent';

export default function SingleCarPage() {
    const { routeId } = useParams(); // Destructure the parameter from useParams
    console.log('single car page ', routeId);
    return (
        <div>
            <Navbar />
            <SingleCarPageContent routeId={routeId} />
            <AppFooter />

        </div>
    );
}
