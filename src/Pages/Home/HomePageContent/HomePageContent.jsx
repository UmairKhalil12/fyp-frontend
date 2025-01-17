import SideFilterBar from "../../../Components/SideFilterBar/SideFilterBar";
import "./HomePageContent.css"

import React from 'react';

export default function HomePageContent() {
    return (
        <div>
            <SideFilterBar />
            <div className="home-page-content-div">
                <h1>Home Page</h1>
            </div>
        </div>
    );
}
