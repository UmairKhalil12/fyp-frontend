import React, { useState, useEffect, useCallback } from 'react';
import { GoogleMap, LoadScript, DirectionsRenderer } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '300px'
};

const center = { lat: 24.939047604647794, lng: 67.12364596507129 };

export default function Map({ source, destination }) {
    //silver jubilee 24.93113178494496, 67.1182679245936
    //maskan gate 24.94982820228756, 67.1127637670557
    // ubit 24.9456433105776, 67.11540781292426
    const [directions, setDirections] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchRoute = useCallback(async () => {
        if (!window.google || !window.google.maps) {
            console.error("Google Maps API is not loaded yet.");
            return;
        }

        setLoading(true);
        try {
            const directionsService = new window.google.maps.DirectionsService();

            const result = await new Promise((resolve, reject) => {
                directionsService.route(
                    {
                        origin: source,
                        destination: destination,
                        travelMode: window.google.maps.TravelMode.WALKING,
                    },
                    (result, status) => {
                        if (status === window.google.maps.DirectionsStatus.OK) {
                            resolve(result);
                        } else {
                            reject(`Error fetching directions: ${status}`);
                        }
                    }
                );
            });

            setDirections(result);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }, [destination, source]);

    useEffect(() => {
        if (window.google && window.google.maps) {
            fetchRoute();
        }
    }, [source, destination, fetchRoute]);

    return (
        <LoadScript googleMapsApiKey="AIzaSyD_rQ3WNwKvl35K1iUz7oM1Gkmt__ydiU8" onLoad={fetchRoute}>
            {loading ? (
                <p>Loading maps...</p>
            ) : (
                <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={20}>
                    {directions && <DirectionsRenderer directions={directions} />}
                </GoogleMap>
            )}
        </LoadScript>
    );
}
