// src/components/TestimonialSlider.jsx
import React from 'react';
import Slider from 'react-slick';
import { Typography, Paper, Box } from '@mui/material';
import { Favorite } from '@mui/icons-material';

function TestimonialSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };

  const testimonials = [
    {
      name: "John Doe",
      location: "New York",
      comment: "Absolutely wonderful service! The parking was easy to find and very affordable."
    },
    {
      name: "Jane Smith",
      location: "Los Angeles",
      comment: "I always struggle with parking in LA, but this app has made it so much easier!"
    },
    {
      name: "Carlos Johnson",
      location: "Chicago",
      comment: "Great options and easy payment process. Highly recommended for busy city areas."
    },
  ];

  return (
    <Box sx={{ p: 3, maxWidth: 600, mx: "auto" }}>
      <Typography variant="h5" gutterBottom>
        What Our Customers Say
      </Typography>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <Paper key={index} elevation={4} sx={{ p: 3, m: 2 }}>
            <Typography variant="h6" component="p">
              {testimonial.comment}
            </Typography>
            <Typography variant="subtitle2" sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
              <Favorite sx={{ color: 'error.main', mr: 1 }} />
              {testimonial.name} - {testimonial.location}
            </Typography>
          </Paper>
        ))}
      </Slider>
    </Box>
  );
}

export default TestimonialSlider;
