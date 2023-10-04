import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import OldLocationMarker from './OldLocationMarker';
import TowerMarker from '../Towers/TowerMarker';
import LocationInfoBox from './LocationInfoBox';
import TowerInfoBox from '../Towers/TowerInfoBox';
import towersData from '../Towers/towers.json';

const UnifiedMap = () => {
    const [displayData, setDisplayData] = useState('events');
    const [eventData, setEventData] = useState([]);
    const [locationInfo, setLocationInfo] = useState(null);

    const NATURAL_EVENT_WILDFIRE = 8;
    const totalYear = 1;
    const radius = 7000;
    let zoom = 7;
    const currentDate = new Date();
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(currentDate.getFullYear() - totalYear);
    const oneYearAgoFormatted = oneYearAgo.toISOString().slice(0, 10);
    const oneYearAgoDateArray = oneYearAgoFormatted.split('-').map(Number);

    const [userLocation, setUserLocation] = useState(null); // To store user's location

    // Function to handle the "Near Me" button click
    const handleNearMeClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const userLat = position.coords.latitude;
                    const userLng = position.coords.longitude;
                    setUserLocation({ lat: userLat, lng: userLng }); // Update userLocation state

                    const nearbyLocations = getLocationsWithinRadius(userLat, userLng, radius);
                    console.log('Nearby locations:', nearbyLocations);

                    // You can also update the map's center here if needed
                    // Example:
                    // mapRef.current.panTo({ lat: userLat, lng: userLng });
                },
                (error) => {
                    console.error('Error getting user location:', error);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    };

    // Function to calculate distances between two sets of latitude and longitude
    const calculateDistance = (lat1, lon1, lat2, lon2) => {
        const radlat1 = (Math.PI * lat1) / 180;
        const radlat2 = (Math.PI * lat2) / 180;
        const theta = lon1 - lon2;
        const radtheta = (Math.PI * theta) / 180;
        let distance =
            Math.sin(radlat1) * Math.sin(radlat2) +
            Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        distance = Math.acos(distance);
        distance = (distance * 180) / Math.PI;
        distance = distance * 60 * 1.1515; // Miles
        distance = distance * 1.609344; // Kilometers
        return distance;
    };

    // Function to get locations within a specified radius from the user's location
    const getLocationsWithinRadius = (userLat, userLng, radius) => {
        const nearbyLocations = eventData.filter((event) => {
            const eventLat = event.geometry[0].coordinates[1];
            const eventLng = event.geometry[0].coordinates[0];
            const distance = calculateDistance(userLat, userLng, eventLat, eventLng);
            return distance <= radius;
        });
        return nearbyLocations;
    };

    // Render the "Near Me" button
    const renderNearMeButton = () => (
        <button className="button-near-me" onClick={handleNearMeClick}>
          Near Me
        </button>
      );
      

    useEffect(() => {
        const fetchEvents = async () => {
            const res = await fetch('https://eonet.gsfc.nasa.gov/api/v3/events');
            const data = await res.json();
            setEventData(data.events);
        };
        fetchEvents();
    }, []);


    const handleToggleLayers = () => {
        setDisplayLayers(!displayLayers);
    };

    const handleLayerClick = (layerName) => {
        // Handle layer click logic here
        console.log(`Clicked on layer: ${layerName}`);
    };

    const renderLayers = () => {
        if (displayLayers) {
            return (
                <div className="layers-menu">
                    <div className="layer" onClick={() => handleLayerClick('Events')}>
                        Events
                    </div>
                    <div className="layer" onClick={() => handleLayerClick('Towers')}>
                        Towers
                    </div>
                    {/* Add more layers here in the future */}
                </div>
            );
        }
        return null;
    };
    

    const handleFilterChange = (e) => {
        setDisplayData(e.target.value);
    };

    const renderMarkers = () => {
        if (displayData === 'events') {
            const recentMarkers = eventData.map((ev) => {
                if (ev.categories[0].id === "wildfires") {
                    const dateTime = ev.geometry[0].date.match(/\d+/g).map(Number).slice(0, 3);
                    const yearDifference = dateTime[0] - oneYearAgoDateArray[0];

                    const dateTimeFire = new Date(dateTime.join('-'));
                    const options = { year: 'numeric', month: 'long', day: 'numeric' };
                    const formattedDate = dateTimeFire.toLocaleDateString('en-US', options);
                    if (yearDifference === 0 || yearDifference === 1) {
                        if (dateTime[1] >= oneYearAgoDateArray[1]){
                            return (
                                <LocationMarker
                                    key={ev.id}
                                    lat={ev.geometry[0].coordinates[1]}
                                    lng={ev.geometry[0].coordinates[0]}
                                    onClick={() => setLocationInfo({
                                        id: ev.id,
                                        status: "Active",
                                        title: ev.title,
                                        date: formattedDate,
                                    })}
                                />
                            );
                        }
                    }
                }
                return null;
            });

            const oldMarkers = eventData.map((ev) => {
                if (ev.categories[0].id === "wildfires") {
                    const dateTime = ev.geometry[0].date.match(/\d+/g).map(Number).slice(0, 3);
                    const yearDifference = dateTime[0] - oneYearAgoDateArray[0];

                    const dateTimeFire = new Date(dateTime.join('-'));
                    const options = { year: 'numeric', month: 'long', day: 'numeric' };
                    const formattedDate = dateTimeFire.toLocaleDateString('en-US', options);
                    if (yearDifference ==! 0 || yearDifference ==! totalYear) {
                        if (dateTime[1] <= oneYearAgoDateArray[1] - 1){
                            return (
                                <OldLocationMarker
                                    key={ev.id}
                                    lat={ev.geometry[0].coordinates[1]}
                                    lng={ev.geometry[0].coordinates[0]}
                                    onClick={() => setLocationInfo({
                                        id: ev.id,
                                        status: "Inactive",
                                        title: ev.title,
                                        date: formattedDate,
                                    })}
                                />
                            );
                        }
                    }
                }
                return null;
            });
            return [...recentMarkers, ...oldMarkers];
        } else if (displayData === 'towers') {
            return towersData.events.map((tower, index) => (
                <TowerMarker
                    key={index}
                    lat={tower.latitude}
                    lng={tower.longitude}
                    onClick={() => setLocationInfo({
                        id: index,
                        title: "Tower Location"
                    })}
                />
            ));
        }
    };

    return (
<section id="portfolio" className="portfolio section-bg unified-portfolio-section">
            <div className="container unified-container" data-aos="fade-up">
                <div className="section-title unified-section-title">
                    <h2>Map View</h2>
                </div>
                <div className="map unified-map">
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyDQPVEYxKO6wJvkesc9ZgT4aK2qbHlK8iQ' }}
                        defaultCenter={{ lat: 37.14576419870761, lng: -119.40013277877114 }}
                        defaultZoom={7}
                        center={userLocation}
                        >
                        {renderMarkers()}
                        
                    </GoogleMapReact>
                    <div className="dropdown-container">
                        <select onChange={handleFilterChange}>
                            <option value="events">Event Data</option>
                            <option value="towers">Tower Data</option>
                        </select>
                        {renderNearMeButton()} {/* Render the "Near Me" button */}
                    </div>
                    {locationInfo && <LocationInfoBox info={locationInfo} />}
                </div>
            </div>
        </section>
    );
}

export default UnifiedMap;
