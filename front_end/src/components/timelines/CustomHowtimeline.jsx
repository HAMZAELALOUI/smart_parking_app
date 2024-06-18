import React from 'react';
import { Typography, Paper, Box } from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineContent,
  TimelineConnector,
} from '@mui/lab';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PaymentIcon from '@mui/icons-material/Payment';

const steps = [
  {
    label: 'Locate a Parking Spot',
    description: 'Use our map to find and select the best parking spot near your destination.',
    icon: <LocationOnIcon />
  },
  {
    label: 'Reserve Your Spot',
    description: 'Choose your parking duration and reserve a spot ahead of time.',
    icon: <EventAvailableIcon />
  },
  {
    label: 'Navigate to Your Spot',
    description: 'Get real-time directions to navigate directly to your reserved spot.',
    icon: <DirectionsCarIcon />
  },
  {
    label: 'Make a Payment',
    description: 'Use our secure payment system to pay for your parking spot conveniently.',
    icon: <PaymentIcon />
  }
];

const backgroundImageUrl = './assets/how.jpg'; // Replace with your image URL

const CustomHowtimeline = () => (
  <Box sx={{
    m: 3,
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover', // Cover the entire size of the box
    backgroundRepeat: 'no-repeat', // Do not repeat the image
    backgroundPosition: 'center', // Center the background image
    width: '100%', // Ensure the box is wide enough
    height: '500px' // Set a fixed height for testing
}}>
    
    <Timeline position="alternate">
      {steps.map((step, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineDot color="primary">{step.icon}</TimelineDot>
            {index < steps.length - 1 ? <TimelineConnector /> : null}
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6" component="h1">{step.label}</Typography>
              <Typography>{step.description}</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  </Box>
);

export default CustomHowtimeline;
