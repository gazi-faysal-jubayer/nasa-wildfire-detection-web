import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import TowerMarker from './TowerMarker';
import TowerInfoBox from './TowerInfoBox';
import towersData from './towers.json';

const Towermap = () => {
    const [towers, setTowers] = useState([]);
    const [locationInfo, setLocationInfo] = useState(null);

    // Assuming you have a towers.json file in your public directory
    useEffect(() => {
      console.log(towersData.events);
      setTowers(towersData.events);
  }, []);

    const towerMarkers = towers.map((tower, index) => (
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

    return (
        <section id="tower-map" className="tower-map section-bg">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>Tower Map View</h2>
                    <p>Showcasing the tower locations from the provided dataset.</p>
                </div>

                <div className="map">
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyDQPVEYxKO6wJvkesc9ZgT4aK2qbHlK8iQ' }}
                        defaultCenter={{
                            lat: 37.14576419870761,
                            lng: -119.40013277877114
                        }}
                        defaultZoom={12}
                    >
                        {towerMarkers}
                    </GoogleMapReact>
                    {locationInfo && <TowerInfoBox info={locationInfo} />}
                </div>
            </div>
        </section>
    );
}

export default Towermap;
