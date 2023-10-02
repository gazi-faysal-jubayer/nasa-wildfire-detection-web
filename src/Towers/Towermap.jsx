import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import TowerMarker from './TowerMarker';
import TowerInfoBox from './TowerInfoBox';
import california_positions from "./california_positions.csv";
import { csv } from 'd3';

const Towermap = () => {
  const [locationInfo, setLocationInfo] = useState(null);
  const [mapData, setMapData] = useState([]);

  useEffect(() => {
    // Load the CSV data here and set it in the mapData state.
    fetch('C:\\Users\\Faysal\\OneDrive\\Desktop\\learning\\React Learning\\nasa-wildfire-detection-web\\src\\Towers\\california_positions.csv')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok (Status: ${response.status})`);
        }
        return response.text();
      })
      .then((data) => {
        // Parse the CSV data and convert it to JSON with unique IDs.
        const jsonData = parseCSVToJSON(data);
        console.log(jsonData); // Add this line for debugging
        setMapData(jsonData);
      })
      .catch((error) => {
        console.error('Error loading CSV data: ', error);
      });
  }, []);

  // Function to parse CSV data into JSON with unique IDs.
  const parseCSVToJSON = (csvData) => {
    const lines = csvData.split('\n');
    const headers = lines[0].split(',');
    const jsonData = [];

    for (let i = 1; i < lines.length; i++) {
      const currentLine = lines[i].split(',');
      if (currentLine.length === headers.length) {
        const obj = {};
        for (let j = 0; j < headers.length; j++) {
          obj[headers[j].trim()] = currentLine[j].trim();
        }
        // Generate a unique ID for each object
        obj.id = generateUniqueID();
        jsonData.push(obj);
      }
    }
    return jsonData;
  };

  // Function to generate a unique ID
  const generateUniqueID = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
  };

  const markers = mapData.map((dataItem) => (
    <TowerMarker
      key={dataItem.id}
      lat={parseFloat(dataItem['Shifted Latitude'])}
      lng={parseFloat(dataItem['Shifted Longitude'])}
      onClick={() =>
        setLocationInfo({
          id: dataItem.id,
          // You can set other properties as needed from the JSON data.
        })
      }
    />
  ));

  const center = {
    lat: 38.31480662525106, // Set the default center latitude
    lng: -116.40094263477383, // Set the default center longitude
  };

  const zoom = 6;

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDQPVEYxKO6wJvkesc9ZgT4aK2qbHlK8iQ' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && <TowerInfoBox info={locationInfo} />}
    </div>
  );
};

export default Towermap;
