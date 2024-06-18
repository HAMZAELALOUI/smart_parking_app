import React, { useState } from 'react';

const SearchForm = ({ onSubmit, onLocationInput, onDateChange, onTimeChange, location, date, time, locationError, isLoading, message }) => {
  return (
    <div style={{
      width: '30%',
      padding: '20px',
      backgroundColor: '#f8f9fa',
      overflowY: 'auto',
      borderRight: '2px solid #dee2e6'
    }}>
      <h2 style={{ color: '#495057' }}>Book Parking Near</h2>
      <form style={{ margin: '20px 0' }} onSubmit={onSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="location" style={{ display: 'block', marginBottom: '5px' }}>Location</label>
          <input
            id="location"
            type="text"
            value={location}
            onChange={onLocationInput}
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
            onChange={onDateChange}
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
            onChange={onTimeChange}
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
  );
};

export default SearchForm;
