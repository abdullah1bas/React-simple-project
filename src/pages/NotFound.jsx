

import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';


const NotFound = () => {
  const theme = useTheme()
  return (
    <Box>
      <Typography variant="h5" color={theme.palette.error.main}>
        There is no Design yet 
        <br/>
        <br/>
        please try again later..
      </Typography>
    </Box>
  );
}

export default NotFound;
