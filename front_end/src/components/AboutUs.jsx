import React from 'react';
import { Box, Typography, Grid, Paper, Button, useMediaQuery } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import Timeline from './CustomTimeline'; // Assuming a custom timeline component
import TestimonialSlider from './TestimonialSlider'; // Assuming a custom testimonial slider component

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(6),
  textAlign: 'center',
  backgroundColor: theme.palette.background.paper, // Ensures contrast and readability
  boxShadow: theme.shadows[3], // Subtle shadow for depth
  borderRadius: theme.shape.borderRadius, // Consistent border radius
}));

function AboutUs() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box sx={{ overflow: 'hidden', px: 3, py: 5, bgcolor: 'background.default',mt:8 }}>
      <Typography variant="h2" gutterBottom component="h1" color="text.primary">
        We're EmsiPark, Your Smart Parking Solution
      </Typography>
      <Typography sx={{ mb: 4, fontSize: '1.25rem', color: 'text.secondary' }}>
        Trusted for nearly two decades, we make parking quicker, cheaper, and smarter.
      </Typography>

      <Grid container spacing={5} sx={{ my: 4 }}>
        <Grid item xs={12} md={6}>
          <Item>
            <img src="/assets/about-us.webp" alt="Dynamic Company Image" style={{ width: '100%', height: 'auto', borderRadius: theme.shape.borderRadius }} />
          </Item>
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Item>
            <Typography variant="h4" component="h3" color="primary.main" gutterBottom>
              Pioneering Innovation in Parking
            </Typography>
            <Typography paragraph>
              From AI-driven parking management to seamless app integrations, discover how we lead with innovation.
            </Typography>
          </Item>
        </Grid>
      </Grid>

      <Timeline />
      <TestimonialSlider />

      <Grid container spacing={5} sx={{ mt: 5 }}>
        {['96% Satisfaction Rate', '45,000+ Space Owners', '2 Million+ Bookings per Year'].map((stat, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Item>
              <Typography variant="h5" component="h3" color="secondary.main">{stat}</Typography>
            </Item>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Button variant="contained" color="success" size="large">
          Learn More About Our Journey
        </Button>
      </Box>
    </Box>
  );
}

export default AboutUs;
