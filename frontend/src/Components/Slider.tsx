import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

// const marks = [
//   {
//     value:"2023/08/03"
    
    
//   },
// ];

function valuetext(value: number) {
  return `${value}`;
}

export default function DiscreteSlider() {
  return (
    <Box sx={{ width: 800 }}>
      <Slider
        aria-label="Always visible"
        defaultValue={80}
        getAriaValueText={valuetext}
        step={10}
        // marks={marks}
        valueLabelDisplay="on"
      />
    </Box>
  );
}