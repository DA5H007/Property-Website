import React from 'react';
import { Typography, Stack } from '@mui/material';
import { MdOutlineLocationOn } from 'react-icons/md';

import ButtonP from './ButtonP';

const SimilarProperty = ( { bg, icon, head, price, location, color } ) => {
  return (
    <Stack sx={{background: bg}} p={2} borderRadius='20px' gap={2} border={'2px solid ' + color} 
        boxShadow={'4px 4px 2px 4px #999'}  >
        <img src={icon} style={{width: '220px'}} />
        <Typography color={color} fontWeight='600' textAlign='left'>{head}</Typography>
        <Stack direction='row' justifyContent='space-between' >
            <Typography color={color} >
                <MdOutlineLocationOn style={{transform: 'translateY(2px)'}} />
                {location}
            </Typography>
            <Typography color={color}>{price}</Typography>
        </Stack>
        <ButtonP caption='Contact Now' bg='#7F56D9' color='#FFF' />
        <ButtonP caption='Learn more' bg='#FFF' color='#7F56D9' />
    </Stack>
  )
}

export default SimilarProperty;