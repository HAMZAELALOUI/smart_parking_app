import React from 'react';
import { Box } from '@mui/material';

const PageContainer = ({ children, ...props }) => (
  <Box sx={{ overflow: 'hidden', px: 3, py: 5, bgcolor: 'background.default', mt: 8 }} {...props}>
    {children}
  </Box>
);

export default PageContainer;
