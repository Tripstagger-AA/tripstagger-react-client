import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import * as React from 'react';

export default function FullWidthTextField() {
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth label='fullWidth' id='fullWidth' />
    </Box>
  );
}
