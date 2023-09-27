import React from "react";
import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'

const NATURAL_EVENT_WILDFIRE = 8;

const Map = ({ eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null)

    const markers = eventData?.map((ev) => {
        if (ev.categories[0].id === "wildfires") {
          return (
            <LocationMarker
              key={ev.id} // Add a unique key prop
              lat={ev.geometry[0].coordinates[1]}
              lng={ev.geometry[0].coordinates[0]}
            />
          );
        }
        return null;
      });

    return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container" data-aos="fade-up">
  
        <div className="section-title">
          <h2>Map View</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
            consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
            in iste officiis commodi quidem hic quas.</p>
        </div>
  
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDQPVEYxKO6wJvkesc9ZgT4aK2qbHlK8iQ' }}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
      </div>
    </section>
    )
}

Map.defaultProps = {
  center: {
      lat: 42.3265,
      lng: -122.8756
  },
  zoom: 6
}

export default Map

