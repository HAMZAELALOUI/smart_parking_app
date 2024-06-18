import React from 'react';
import { Grid, Typography, useMediaQuery, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import TestimonialSlider from '../components/sections/TestimonialSlider';
import AboutUsContent from '../components/sections/AboutUsContent';
import AboutUsImage from '../components/sections/AboutUsImage';
import AboutUsStats from '../components/sections/AboutUsStats';
import CustomButton from '../components/common/CustomButton';
import PageContainer from '../components/layout/PageContainer';
import { Timeline } from '@mui/icons-material';

function AboutUs() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <PageContainer>
      <AboutUsContent />
      <Grid container spacing={5} sx={{ my: 4 }}>
        <AboutUsImage />
        <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Typography variant="h4" component="h3" color="primary.main" gutterBottom>
            Pioneering Innovation in Parking
          </Typography>
          <Typography paragraph>
            From AI-driven parking management to seamless app integrations, discover how we lead with innovation.
          </Typography>
        </Grid>
      </Grid>
      <Timeline />
      <TestimonialSlider />
      <AboutUsStats />
      <Box sx={{ mt: 8, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <CustomButton variant="contained" color="success" size="large">
          Learn More About Our Journey
        </CustomButton>
      </Box>
    </PageContainer>
  );
}

export default AboutUs;
