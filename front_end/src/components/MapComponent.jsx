import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Setup to avoid icon missing issues in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const center = [33.7490, -84.3880]; // Coordinates for Atlanta

const MapComponent = () => {
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate a search or booking operation
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
        borderRight: '2px solid #dee2e6'  // Added a border for clarity
      }}>
        <h2 style={{ color: '#495057' }}>Book Parking Near</h2>
        <form style={{ margin: '20px 0' }} onSubmit={handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="location" style={{ display: 'block', marginBottom: '5px' }}>Location</label>
            <input
              id="location"
              type="text"
              value={location}
              onChange={e => setLocation(e.target.value)}
              placeholder="Enter a location"
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ced4da'
              }}
            />
          </div>
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
      <div style={{ width: '70%' ,zIndex:10,height:'91%'}}>
        <MapContainer center={center} zoom={13} style={{ height: '100%', width: '100%',marginTop: '60px' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={center}>
            <Popup>A pretty CSS3 popup. <br /> Easily customizable.</Popup>
          </Marker>
          {/* Additional markers and components */}
        </MapContainer>
      </div>
    </div>
  );
}

export default MapComponent;
