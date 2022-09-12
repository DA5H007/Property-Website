import React from 'react';
import { Button } from '@mui/material';

const ButtonP = ({ caption, bg, color }) => {
  return (
    <Button className='ButtonP' sx={{
        ':hover': {
            color: bg,
            background: color,
            border: '2px solid ' + bg
        },
        background: bg,
        color: color,
        borderRadius: '10px',
        border: '2px solid ' + bg,
        boxShadow: '2px 2px 2px 2px #555'
    }}>
        {caption}
    </Button>
  )
}

export default ButtonP;