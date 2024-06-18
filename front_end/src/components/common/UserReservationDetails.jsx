import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const ReservationDetails = ({ row }) => (
  <Box sx={{
    margin: 1,
    padding: 2,
    border: '1px solid #ccc',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    borderRadius: '8px',
    backgroundColor: 'white',
    transition: 'box-shadow 0.3s ease-in-out'
  }}>
    <Typography variant="h6" gutterBottom component="div" sx={{
      borderBottom: '2px solid #4a148c',
      padding: '12px 16px',
      backgroundColor: '#f3e5f5',
      borderRadius: '7px 7px 0 0',
      fontWeight: 'bold',
      color: '#4a148c'
    }}>
      Detailed Reservation Information
    </Typography>
    <Box sx={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Typography variant="subtitle1" sx={{ color: '#333' }}>
        Date of Reservation: <strong>{row.date}</strong>
      </Typography>
      <Typography variant="subtitle1" sx={{ color: '#333' }}>
        Total Price: <strong>{row.price}</strong>
      </Typography>
      <Typography variant="body1" sx={{ color: '#666' }}>
        {row.details}
      </Typography>
    </Box>
  </Box>
);

export default ReservationDetails;
