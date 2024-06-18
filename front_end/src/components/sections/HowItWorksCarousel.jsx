import React from 'react';
import { Typography, Box, Button, Grid, Paper } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TimerIcon from '@mui/icons-material/Timer';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { styled } from '@mui/material/styles';

// Custom paper component to adjust background and shadow
const CustomPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  boxShadow: 'none',
  backgroundColor: '#f7f7f7',
  borderRadius: theme.spacing(2),
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)'
  },
  textAlign: 'left',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
}));

// Icon styling for consistent color and size
const iconStyle = {
  fontSize: '3rem',
  color: '#4caf50', // A shade of green for icons
  marginBottom: 2
};

const steps = [
  {
    title: 'Tell us where you’re going',
    description: 'Our super smart app will quickly find the best space for you. And with 100k spaces to choose from, including private driveways, no one gets you closer.',
    icon: <LocationOnIcon sx={iconStyle} />
  },
  {
    title: 'Book guaranteed parking in seconds',
    description: 'Scroll through the available spaces and check out reviews & photos. Then just tap book and relax — parking has never been simpler.',
    icon: <TimerIcon sx={iconStyle} />
  },
  {
    title: 'You’re all set',
    description: 'Find directions & access instructions and amend your booking if needed - all through your JustPark account. And, if you need anything else, our Customer Service team is always there to help.',
    icon: <CheckCircleOutlineIcon sx={iconStyle} />
  }
];

const HowItWorksCarousel = () => {
  return (
    <Box sx={{
      flexGrow: 1,
      mt: 4,
      mb: 4,
      backgroundColor: '#e8f5e9', // Light green background for the whole section
      padding: 3,
      borderRadius: 2
    }}>
      <Typography variant="h4" gutterBottom component="div" sx={{
        mb: 2,
        color: '#388e3c' // Dark green color for titles
      }}>
        The simplest way to book a parking space.
      </Typography>
      <Grid container spacing={2}>
        {steps.map((step, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <CustomPaper>
              <Typography variant="h6" component="h3" sx={{
                fontWeight: 'bold',
                mb: 1,
                color: '#2e7d32' // Darker green for step titles
              }}>
                {step.title}
              </Typography>
              <Typography variant="body1">
                {step.description}
              </Typography>
            </CustomPaper>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Button variant="contained" color="primary" sx={{
          textTransform: 'none',
          backgroundColor: '#66bb6a' // Attractive green for the button
        }}>
          Find your space
        </Button>
      </Box>
    </Box>
  );
};

export default HowItWorksCarousel;
