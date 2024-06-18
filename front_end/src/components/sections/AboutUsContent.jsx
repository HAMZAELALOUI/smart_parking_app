import React from 'react';
import { Typography } from '@mui/material';

const AboutUsContent = () => (
  <>
    <Typography variant="h2" gutterBottom component="h1" color="text.primary">
      We're EmsiPark, Your Smart Parking Solution
    </Typography>
    <Typography sx={{ mb: 4, fontSize: '1.25rem', color: 'text.secondary' }}>
      Trusted for nearly two decades, we make parking quicker, cheaper, and smarter.
    </Typography>
  </>
);

export default AboutUsContent;
