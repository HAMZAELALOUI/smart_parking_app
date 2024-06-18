import React from 'react';
import CustomButton from '../common/CustomButton';
import { Box } from '@mui/material';

const LocationForm = ({
  location,
  handleLocationInput,
  handleLocationDetect,
  locationError,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
  isLoading,
  message
}) => (
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
    
        <CustomButton variant="contained" color="success" size="large">
         Search
        </CustomButton>  

    </form>
    {message && <p style={{ color: '#28a745', marginTop: '10px' }}>{message}</p>}
  </div>
);

export default LocationForm;
