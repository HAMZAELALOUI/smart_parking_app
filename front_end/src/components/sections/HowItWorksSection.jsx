import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Button,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  useMediaQuery,
  useTheme,
  Card,
  CardContent,
  CardMedia,
  Grid
} from '@mui/material';
import { CheckCircle, Map, Payment, DirectionsCar } from '@mui/icons-material';
import HowItWorksCarousel from './HowItWorksCarousel';
import CustomHowtimeline from '../timelines/CustomHowtimeline';


const steps = [
  {
    label: 'Register and Set Up',
    description: 'Create your account and add your vehicle to start using smart parking.',
    img: '/images/setup.svg',
    icon: <CheckCircle />
  },
  {
    label: 'Find and Reserve a Parking Spot',
    description: 'Use our map to find parking near your destination and reserve a spot in real-time.',
    img: '/images/find-park.svg',
    icon: <Map />
  },
  {
    label: 'Navigate and Park',
    description: 'Follow turn-by-turn directions to the parking spot and use the app for a seamless check-in experience.',
    img: '/images/navigate.svg',
    icon: <DirectionsCar />
  },
  {
    label: 'Payment and Extensions',
    description: 'Pay for parking via our app and easily extend your parking session anytime.',
    img: '/images/payment.svg',
    icon: <Payment />
  }
];

const HowItWorksSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ flexGrow: 1, m: 3 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        How It Works
      </Typography>
      <Stepper orientation={isMobile ? 'vertical' : 'horizontal'} activeStep={-1} sx={{ pt: 3 }}>
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel icon={step.icon}>{step.label}</StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Card sx={{ display: 'flex', justifyContent: 'center', mt: 2, boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  sx={{ width: 151 }}
                  image={step.img}
                  alt={`${step.label} illustration`}
                />
                <CardContent>
                  <Typography variant="body2">
                    {step.description}
                  </Typography>
                </CardContent>
              </Card>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Learn More
              </Button>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      <CustomHowtimeline/>
      <HowItWorksCarousel/>

    </Box>
  );
};

export default HowItWorksSection;
