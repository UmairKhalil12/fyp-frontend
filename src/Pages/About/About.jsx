import React from 'react';
import Navbar from "../../Components/Navbar/Navbar"
import Footer from "../../Components/Footer/Footer"
import AboutPageContent from '../../Components/AboutPageContent/AboutPageContent';

export default function About() {
    return (
        <div>
            <Navbar />
            <AboutPageContent />
            <Footer />
        </div>
    );
}

