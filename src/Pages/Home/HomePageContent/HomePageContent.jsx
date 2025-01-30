import "./HomePageContent.css";
import React, { useMemo } from 'react';
// import Map from "../../"

import Map from "../../../Components/Map/Map";

export default function HomePageContent() {
    //silver jubilee 24.93113178494496, 67.1182679245936
    //maskan gate 24.94982820228756, 67.1127637670557
    // ubit 24.9456433105776, 67.11540781292426

    const KU_Maskan_Gate = useMemo(() => ({ lat: 24.94982820228756, lng: 67.1127637670557 }), []);
    const UBIT = useMemo(() => ({ lat: 24.9456433105776, lng: 67.11540781292426 }), []);

    return (
        <div className="main-home-page-content" >
            <div className="home-page-content">
                <div>
                    <h1>Home Page</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate culpa tempora eius doloremque maxime omnis necessitatibus hic laudantium, fugit quae aspernatur laboriosam, libero ea ipsam unde! Vitae pariatur deleniti iusto.</p>
                </div>
            </div>
            <Map source={KU_Maskan_Gate} destination={UBIT} />
        </div>
    );
}
