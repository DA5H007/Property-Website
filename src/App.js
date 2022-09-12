import React from 'react';
import { Box } from '@mui/material';
import './App.css';
import NavBar from './components/NavBar';
import PropertyDetails from './page/PropertyDetails';

const App = () => {
  return (
    <Box className='App' textAlign='center' sx={{
        p: {xs: '20px', md: '0 40px 40px'}
    }}>
        <NavBar />
        <PropertyDetails />
    </Box>
  )
}

export default App;