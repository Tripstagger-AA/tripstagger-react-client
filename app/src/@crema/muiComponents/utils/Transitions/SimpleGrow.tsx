import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import {Theme} from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import * as React from 'react';

const icon = (
  <Paper sx={{m: 1}} elevation={4}>
    <Box component='svg' sx={{width: 100, height: 100}}>
      <Box
        component='polygon'
        sx={{
          fill: (theme: Theme) => theme.palette.common.white,
          stroke: theme => theme.palette.divider,
          strokeWidth: 1,
        }}
        points='0,100 50,00, 100,100'
      />
    </Box>
  </Paper>
);

export default function SimpleGrow() {
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
        <Grow in={checked}>{icon}</Grow>
        {/* Conditionally applies the timeout prop to change the entry speed. */}
        <Grow in={checked} style={{transformOrigin: '0 0 0'}} {...(checked ? {timeout: 1000} : {})}>
          {icon}
        </Grow>
      </Box>
    </Box>
  );
}
