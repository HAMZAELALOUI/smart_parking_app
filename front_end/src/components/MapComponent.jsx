import React, { useState, useRef, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import carIcon from './img/road.png';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import axios from 'axios';

// Setup to avoid icon missing issues in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const redIcon = new L.Icon({
  iconUrl: carIcon,
  iconSize: [50, 50], // Adjust the size of the icon as needed
  iconAnchor: [16, 32], // Adjust the anchor point if needed
  popupAnchor: [0, -32], // Adjust the popup anchor if needed
});


const apiKey = '40fcbde3fd7c42faae8b8e189eb10ce9'; // Your API key
const initialCenter = [ 33.5335, -7.5816]; //EMSI Casablanca Parking

const parkingLocations = [
  { name: "EMSI Casablanca Parking", lat: 33.5335, lng: -7.5816 },
  { name: "EMSI Rabat Parking", lat: 34.0209, lng: -6.8416 },
  { name: "EMSI Marrakech Parking", lat: 31.6295, lng: -7.9811 },
];



const MapComponent = () => {
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [searchedCoords, setSearchedCoords] = useState(null); // To store the coordinates of the fetched location

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [locationError, setLocationError] = useState('');
  const [mapCenter, setMapCenter] = useState(initialCenter);
  const mapRef = useRef();
  const debounceTimer = useRef(null); // Correctly define debounceTimer

  const fetchLocation = async (query) => {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(query)}&key=${apiKey}`;
    try {
      const response = await axios.get(url);
      if (response.data && response.data.results.length > 0) {
        const { lat, lng } = response.data.results[0].geometry;
        setLocation(response.data.results[0].formatted);
        setSearchedCoords([lat, lng]); // Store the coordinates
      } else {
        setLocationError('Location not found');
      }
    } catch (error) {
      setLocationError('Unable to retrieve the location');
      console.error(error);
    }
  };

  const handleLocationInput = (e) => {
    const inputLocation = e.target.value;
    setLocation(inputLocation);
    if (inputLocation.length > 3) {
      clearTimeout(debounceTimer.current);  // Clear the timer on new input
      debounceTimer.current = setTimeout(() => {
        fetchLocation(inputLocation);
      }, 4000);  // Set a new timer
    }
  };

  const handleLocationDetect = () => {
    if (!navigator.geolocation) {
      setLocationError('Geolocation is not supported by your browser');
      return;
    }

    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      fetchLocation(`${latitude}+${longitude}`);
    }, () => {
      setLocationError('Unable to retrieve your location');
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setMessage('Search completed successfully!');
    }, 2000);
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{
        width: '30%',
        padding: '20px',
        backgroundColor: '#f8f9fa',
        overflowY: 'auto',
        borderRight: '2px solid #dee2e6'
      }}>
        <h2 style={{ color: '#495057' }}>Book Parking Near</h2>
        <form style={{ margin: '20px 0' }} onSubmit={handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="location" style={{ display: 'block', marginBottom: '5px' }}>Location</label>
            <input
              id="location"
              type="text"
              value={location}
              onChange={handleLocationInput}
              onFocus={handleLocationDetect}
              placeholder="Enter a location or click to detect"
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ced4da'
              }}
            />
          </div>
          {locationError && <p style={{ color: 'red' }}>{locationError}</p>}
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="date" style={{ display: 'block', marginBottom: '5px' }}>Date</label>
            <input
              id="date"
              type="date"
              value={date}
              onChange={e => setDate(e.target.value)}
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ced4da'
              }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="time" style={{ display: 'block', marginBottom: '5px' }}>Time</label>
            <input
              id="time"
              type="time"
              value={time}
              onChange={e => setTime(e.target.value)}
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ced4da'
              }}
            />
          </div>
          <button type="submit" style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}>
            {isLoading ? 'Loading...' : 'Search'}
          </button>
        </form>
        {message && <p style={{ color: '#28a745', marginTop: '10px' }}>{message}</p>}
      </div>
      <div style={{ width: '70%', zIndex: 10, height: '92%' ,marginTop:'50px' }}>
      <MapContainer
          center={mapCenter}
          zoom={7}
          style={{ height: "100%", width: "100%" }}
          whenCreated={(mapInstance) => {
            mapRef.current = mapInstance;
          }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {parkingLocations.map((park) => (
            <Marker key={park.name} position={[park.lat, park.lng]}>
              <Popup>{park.name}</Popup>
            </Marker>
          ))}
          {searchedCoords && (
  <Marker position={searchedCoords} icon={redIcon}>
    <Popup>{location}</Popup>
  </Marker>
)}

        </MapContainer>
      </div>
    </div>
  );
}

export default MapComponent;
