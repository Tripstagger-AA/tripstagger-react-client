import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import * as React from 'react';

function valuetext(value: number) {
  return `${value}°C`;
}

export default function ColorSlider() {
  return (
    <Box sx={{width: 300}}>
      <Slider
        aria-label='Temperature'
        defaultValue={30}
        getAriaValueText={valuetext}
        color='secondary'
      />
    </Box>
  );
}
