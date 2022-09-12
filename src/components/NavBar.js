import React from 'react';

// MATERIAL IMPORT
import {
    List, ListItem, ListItemButton, ListItemIcon, ListItemText
} from '@mui/material';

// ICONS IMPORT
import { IoPerson } from 'react-icons/io5';     // PERSON ICON


const NavBar = () => {
    return (
        <nav>
            <ul className='navbar'>
                <li className='navbar-brand'>Propertybhavan</li>
                <li>
                    <a>Home</a>
                    <a>List Your Properties</a>
                    <a>Blog</a>
                    <a><IoPerson color='#341F87' /></a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;