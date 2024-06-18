import React from 'react';
import { Grid } from '@mui/material';
import StatItem from '../common/StatItem';

const stats = [
  '96% Satisfaction Rate',
  '45,000+ Space Owners',
  '2 Million+ Bookings per Year',
];

const AboutUsStats = () => (
  <Grid container spacing={5} sx={{ mt: 5 }}>
    {stats.map((stat, index) => (
      <Grid item xs={12} sm={4} key={index}>
        <StatItem stat={stat} />
      </Grid>
    ))}
  </Grid>
);

export default AboutUsStats;
