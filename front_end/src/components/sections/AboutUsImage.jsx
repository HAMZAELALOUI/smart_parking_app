import React from 'react';
import { Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(6),
  textAlign: 'center',
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
  borderRadius: theme.shape.borderRadius,
}));

const AboutUsImage = () => (
  <Grid item xs={12} md={6}>
    <Item>
      <img
        src="/assets/about-us.webp"
        alt="Dynamic Company Image"
        style={{ width: '100%', height: 'auto', borderRadius: 'inherit' }}
      />
    </Item>
  </Grid>
);

export default AboutUsImage;
