import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import * as React from 'react';

export default function BoxComponent() {
  return (
    <Box component='span' sx={{p: 2, border: '1px dashed grey'}}>
      <Button>Save</Button>
    </Box>
  );
}
