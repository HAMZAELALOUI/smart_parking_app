import React from 'react';
import { Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(6),
  textAlign: 'center',
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
  borderRadius: theme.shape.borderRadius,
}));

const StatItem = ({ stat }) => (
  <Item>
    <Typography variant="h5" component="h3" color="secondary.main">
      {stat}
    </Typography>
  </Item>
);

export default StatItem;
