import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import * as React from 'react';

export default function Animations() {
  return (
    <Box sx={{width: 300}}>
      <Skeleton />
      <Skeleton animation='wave' />
      <Skeleton animation={false} />
    </Box>
  );
}
