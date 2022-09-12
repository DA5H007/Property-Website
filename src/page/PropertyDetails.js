import React from 'react';
import '../App.css';
// MUI
import { Box, Stack, Typography } from '@mui/material'
// ICONS
import { IoBedOutline } from 'react-icons/io5'; // Bed Icon
import { HiOutlineArrowsExpand } from 'react-icons/hi'; // 4 Arrows Icon
import { GiBathtub } from 'react-icons/gi'; // Bath Tub Icon
import { TbArmchair } from 'react-icons/tb'; // 4 Arrows Icon
import { RiHospitalLine } from 'react-icons/ri';  // Hospital Icon
import { SiGumtree } from 'react-icons/si';     // Tree Icon
import { RiBusFill } from 'react-icons/ri';     // Bus  Icon
import { BuildingLibraryIcon } from '@heroicons/react/24/outline';  // Police Station Icon
import { BiDumbbell } from 'react-icons/bi';     // Gym Icon
import { BsCheck2Circle } from 'react-icons/bs';    // Check Icon
import { BsDot } from 'react-icons/bs';         // Dot Icon
import { AiOutlineHeart } from 'react-icons/ai';    // Heart Icon
import { FaExchangeAlt } from 'react-icons/fa';    // Share Icon
import { GrUpload } from 'react-icons/gr';    // Upload Icon
import { FaWhatsappSquare } from 'react-icons/fa';  // Whatsapp icon


// COMPONENTS
import DetailsItem from '../components/DetailsItem';
import ImageGallery from '../components/ImageGallery';
import ButtonP from '../components/ButtonP';
import SimilarProperty from '../components/SimilarProperty';
// IMAGES
import house1 from '../assets/house1.jpg';
import house2 from '../assets/house2.jpg';
import house3 from '../assets/house3.jpg';
import NearbyDetail from '../components/NearbyDetail';

const PropertyDetails = () => {
    return (
        <Stack className='PropertyDetails' alignItems='flex-start' sx={{
            p: { xs: '20px 0', md: '20px' }
        }} p={5} gap={4} >
            <ButtonP caption='For Rent' bg='#7F56D9' color='#FFF' />
            <Typography variant='h4' fontWeight='600' sx={{
                fontSize: { xs: '24px', sm: '28px', md: '32px' },
                letterSpacing: { xs: '1px', sm: '2px' }
            }}>
                2BHK Apartment for Sale in Newtown, Kolkata, West Bengal
            </Typography>
            {/* IMAGE GALLERY  */}
            <ImageGallery />

            {/* LIKE SHARE UPLOAD BUTTON */}
            <Stack alignSelf='flex-end' direction='row' sx={{
                gap: { xs: 2, md: 3 }
            }}>
                <GrUpload className='lsu-btn' />
                <AiOutlineHeart className='lsu-btn' />
                <FaExchangeAlt className='lsu-btn' />
            </Stack>

            <Typography variant='h5' color='#341F87'>₹ 25,000</Typography>
            <Stack alignSelf='stretch' direction='row' justifyContent='space-between' alignItems='center' sx={{
                transform: 'translateY(-20px)',
                flexDirection: { xs: 'column', md: 'row' }
            }}>
                <Typography sx={{
                    fontSize: { xs: '15px', lg: '16px' }
                }}>
                    SP Sukhobrishti Ln, Action Area III, Newtown, Kolkata, West Bengal 700135, India
                </Typography>
                <Stack gap={2} direction='row'>
                    <FaWhatsappSquare size='40px' color='#1FC87F' style={{
                        boxShadow: '2px 2px 2px 2px #555',
                        border: 'none',
                        outline: 'none'
                    }} />
                    <ButtonP caption='Contact Owner' bg='#7F56D9' color='#fff' />
                </Stack>
            </Stack>

            {/* LINKS  */}
            <Stack alignSelf='center' direction='row' gap={2}>
                <a className='scroll-links' href='#overview'>Overview</a>
                <a className='scroll-links' href='#details'>Details</a>
                <a className='scroll-links' href='features'>Feature & Amenities</a>
                <a className='scroll-links' href='#nearby'>Nearby</a>
            </Stack>

            {/* OVERVIEW  */}
            <Typography id='overview' variant='h5' color='#341F87'>Overview</Typography>
            <Typography textAlign='left' sx={{
                width: { xs: '95%', md: '90%', lg: '70%' }
            }} >
                Property taxes are charged by local government entities, such as KMC, and are due by
                the owner of the property. The amount of KMC property tax that must be paid may
                vary. Thus, it depends on the location and a number of other criteria. KMC approved
                the new Unit Area Assessment (UAA) mechanism for calculating property taxes in
                March 2017.
            </Typography>

            {/* DETAILS  */}
            <Typography id='details' variant='h5' color='#341F87'>Details</Typography>
            <Stack direction='row' justifyContent='center' flexWrap='wrap' gap={1} >
                <DetailsItem
                    icon={<IoBedOutline color='#341F87' fontSize='24px' />}
                    keys='BHK'
                    value='3BHK'
                />
                <DetailsItem
                    icon={<GiBathtub color='#341F87' fontSize='24px' />}
                    keys='Bathroom'
                    value='2'
                />
                <DetailsItem
                    icon={<TbArmchair color='#341F87' fontSize='24px' />}
                    keys='Furnishing Status'
                    value='Semi-Furnished'
                />
                <DetailsItem
                    icon={<HiOutlineArrowsExpand color='#341F87' fontSize='24px' />}
                    keys='Super Build Area'
                    value='1418 sq. ft'
                />
            </Stack>

            {/* FEATURES  */}
            <Typography id='features' variant='h5' color='#341F87'>Features & Amenities</Typography>
            <Stack direction='row' gap={4}>
                <Stack direction='row' gap={1}>
                    <BsCheck2Circle color='#412D8F' />
                    <Typography sx={{
                        transform: 'translateY(-3px)'
                    }}>CCTV</Typography>
                </Stack>
                <Stack direction='row' gap={1}>
                    <BsCheck2Circle color='#412D8F' />
                    <Typography sx={{
                        transform: 'translateY(-3px)'
                    }}>Security</Typography>
                </Stack>
                <Stack direction='row' gap={1}>
                    <BsCheck2Circle color='#412D8F' />
                    <Typography sx={{
                        transform: 'translateY(-3px)'
                    }}>Life</Typography>
                </Stack>
            </Stack>

            {/* NEARBY  */}
            <Typography id='nearby' variant='h5' color='#341F87'>Nearby</Typography>
            <Stack direction='row' flexWrap='wrap' sx={{
                gap: {xs: 8, sm: 4}
            }}>
                <NearbyDetail caption='Hospital' icon={<RiHospitalLine color='#FFF' fontSize='32px' />} />
                <NearbyDetail caption='Park' icon={<SiGumtree color='#FFF' fontSize='32px' />} />
                <NearbyDetail caption='School' icon={<RiBusFill color='#FFF' fontSize='32px' />} />
                <NearbyDetail caption='Police' icon={<BuildingLibraryIcon color='#FFF' height='32px' />} />
                <NearbyDetail caption='Gym' icon={<BiDumbbell color='#FFF' fontSize='32px' />} />
            </Stack>

            {/* SIMILAR PROPERTIES  */}
            <Typography variant='h5' color='#341F87'>Similar Properties</Typography>
            <Stack gap={4}>

                <Stack flexWrap='wrap' direction='row' justifyContent='center' gap={2}>
                    <SimilarProperty icon={house1} color='#000' bg='#FFF'
                        location='Delhi' price='₹18000' head='3BHK Apartment' />
                    <SimilarProperty icon={house2} color='#FFF' bg='#4B2FB7'
                        location='Mumbai' price='₹12000' head='1BHK Apartment' />
                    <SimilarProperty icon={house3} color='#FFF' bg='#9277FB'
                        location='Kolkata' price='₹28000' head='4BHK Apartment' />
                </Stack>
                <Stack direction='row' alignSelf='center'>
                    <BsDot fontSize='32px' color='#341F87' />
                    <BsDot fontSize='32px' color='#341F87' />
                    <BsDot fontSize='32px' color='#341F87' />
                </Stack>
            </Stack>

        </Stack>
    )
}

export default PropertyDetails