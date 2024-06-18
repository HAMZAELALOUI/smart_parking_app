import React from 'react';
import { Button } from '@mui/material';

const CustomButton = ({ children, ...props }) => (
  <Button {...props}>{children}</Button>
);

export default CustomButton;
