import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Paper from '@mui/material/Paper';
import Switch from '@mui/material/Switch';
import Zoom from '@mui/material/Zoom';
import * as React from 'react';

const icon = (
  <Paper sx={{m: 1}} elevation={4}>
    <Box component='svg' sx={{width: 100, height: 100}}>
      <Box
        component='polygon'
        sx={{
          fill: theme => theme.palette.common.white,
          stroke: theme => theme.palette.divider,
          strokeWidth: 1,
        }}
        points='0,100 50,00, 100,100'
      />
    </Box>
  </Paper>
);

export default function SimpleZoom() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(previous => !previous);
  };

  return (
    <Box sx={{height: 180}}>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label='Show'
      />
      <Box sx={{display: 'flex'}}>
        <Zoom in={checked}>{icon}</Zoom>
        <Zoom in={checked} style={{transitionDelay: checked ? '500ms' : '0ms'}}>
          {icon}
        </Zoom>
      </Box>
    </Box>
  );
}
