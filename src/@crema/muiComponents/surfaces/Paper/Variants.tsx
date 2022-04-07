import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import * as React from 'react';

export default function Variants() {
  return (
    <Box
      sx={{
        display: 'flex',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
      <Paper variant='outlined' />
      <Paper variant='outlined' square />
    </Box>
  );
}
