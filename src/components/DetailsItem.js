import React from 'react';
import { Stack, Typography } from '@mui/material';

const DetailsItem = ({ icon, keys, value }) => {
    return (
        <Stack alignItems='flex-start' p={2} gap='2px' border='2px solid #341F87' borderRadius='10px' sx={{
            width: {xs: '180px', lg: '220px'}
        }}>
            {icon}
            <Typography fontWeight='600' color='#341F87'>
                {keys}
            </Typography>
            <Typography fontSize={'12px'}>
                {value}
            </Typography>
        </Stack>
    )
}

export default DetailsItem