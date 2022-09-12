import React from 'react';
import { Stack } from '@mui/material';
import houseImg from '../assets/houseGalley.jpg';

const ImageGallery = () => {
    return (
        <Stack className='ImageGallery'  justifyContent='center' alignItems='center' gap={2} sx={{
            alignSelf: 'center',
            flexDirection: {xs: 'column', md: 'row'}
        }}>
            <img className='ImageGallery-main-img' src={houseImg}  />
            <Stack gap={1}>
                <Stack direction='row' flexWrap='wrap' gap={1}>
                    <img src={houseImg} className='gallery-img' />
                    <img src={houseImg} className='gallery-img' />
                </Stack>
                <Stack direction='row' flexWrap='wrap' gap={1}>
                    <img src={houseImg} className='gallery-img' />
                    <img src={houseImg} className='gallery-img' />
                </Stack>
            </Stack>
        </Stack>
    )
}

export default ImageGallery;