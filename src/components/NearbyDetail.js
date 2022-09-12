import React from 'react';

import { Box, Typography } from '@mui/material';

const NearbyDetail = ({ icon, caption}) => {
  return (
    <Box sx={{
        background: '#352089',
        boxShadow: '2px 2px 2px 2px #666',
        borderRadius: '10px',
        padding: '10px',
        width: '80px'
    }}>
        {icon}
        <Typography color='#FFF'>{caption}</Typography>
    </Box>
  )
}

export default NearbyDetail