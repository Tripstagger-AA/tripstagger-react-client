import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import * as React from 'react';

function valuetext(value: number) {
  return `${value}°C`;
}

export default function DiscreteSliderSteps() {
  return (
    <Box sx={{width: 300}}>
      <Slider
        aria-label='Small steps'
        defaultValue={0.000_000_05}
        getAriaValueText={valuetext}
        step={0.000_000_01}
        marks
        min={-0.000_000_05}
        max={0.000_000_1}
        valueLabelDisplay='auto'
      />
    </Box>
  );
}
