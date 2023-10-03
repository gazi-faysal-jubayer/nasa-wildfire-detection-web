import React from "react";
import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import OldLocationMarker from './OldLocationMarker'
import LocationInfoBox from './LocationInfoBox'


const Map = ({ eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null)
    const totalYear = 1

    const currentDate = new Date();
    const oneYearAgo = new Date();

    oneYearAgo.setFullYear(currentDate.getFullYear() - totalYear);

    const oneYearAgoFormatted = oneYearAgo.toISOString().slice(0, 10);
    const oneYearAgoDateArray = oneYearAgoFormatted.split('-').map(Number);

    const recentMarkers = eventData.map((ev) => {
        if (ev.categories[0].id === "wildfires") {
          const dateTime = ev.geometry[0].date.match(/\d+/g).map(Number).slice(0, 3)
          const yearDifference = dateTime[0] - oneYearAgoDateArray[0];

          const dateTimeFire = new Date(dateTime.join('-'));
          const options = { year: 'numeric', month: 'long', day: 'numeric' };
          const formattedDate = dateTimeFire.toLocaleDateString('en-US', options);

          if (yearDifference === 0 || yearDifference === 1) {
            if (dateTime[1] >= oneYearAgoDateArray[1]){
              return (
                <LocationMarker
                  key={ev.id} // Add a unique key prop
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
          const dateTime = ev.geometry[0].date.match(/\d+/g).map(Number).slice(0, 3)
          const yearDifference = dateTime[0] - oneYearAgoDateArray[0];

          const dateTimeFire = new Date(dateTime.join('-'));
          const options = { year: 'numeric', month: 'long', day: 'numeric' };
          const formattedDate = dateTimeFire.toLocaleDateString('en-US', options);

          if (yearDifference ==! 0 || yearDifference ==! totalYear) {
            if (dateTime[1] <= oneYearAgoDateArray[1] - 1){
              return (
                <OldLocationMarker
                  key={ev.id} // Add a unique key prop
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
            defaultCenter={center}
            defaultZoom={zoom}
          >
            {recentMarkers}
            {oldMarkers}
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

