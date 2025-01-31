import React, { useState, useEffect, useCallback } from 'react';
import { GoogleMap, LoadScript, DirectionsRenderer } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '300px'
};

const center = { lat: 24.939047604647794, lng: 67.12364596507129 };

export default function Map({ waypoints }) {
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

            const waypointsForRequest = waypoints.slice(1, -1).map(waypoint => ({
                location: waypoint,
                stopover: true, // Important: Makes the waypoint a stop
            }));

            const request = {
                origin: waypoints[0], // First element is the origin
                destination: waypoints[waypoints.length - 1], // Last element is the destination
                travelMode: window.google.maps.TravelMode.WALKING,
                waypoints: waypointsForRequest, // Array of waypoints
            };


            const result = await new Promise((resolve, reject) => {
                directionsService.route(request, (result, status) => {
                    if (status === window.google.maps.DirectionsStatus.OK) {
                        resolve(result);
                    } else {
                        reject(`Error fetching directions: ${status}`);
                    }
                });
            });

            setDirections(result);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }, [waypoints]);

    useEffect(() => {
        if (window.google && window.google.maps) {
            fetchRoute();
        }
    }, [waypoints, fetchRoute]);

    return (
        <LoadScript googleMapsApiKey="AIzaSyD_rQ3WNwKvl35K1iUz7oM1Gkmt__ydiU8" onLoad={fetchRoute}> {/* Replace with your API key */}
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