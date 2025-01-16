import SideFilterBar from "../../../Components/SideFilterBar/SideFilterBar";
import "./HomePageContent.css"

import React from 'react';

export default function HomePageContent() {
    return (
        <div>
            <div style={{ display: 'flex' }}>
                <SideFilterBar />
                <div className="home-page-content-div">
                    <h1 style={{ textAlign: 'center' }}>Home Page</h1>
                </div>
            </div>

        </div>
    );
}
