import Fingerprint from '@mui/icons-material/Fingerprint';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import * as React from 'react';

export default function IconButtonColors() {
  return (
    <Stack direction='row' spacing={1}>
      <IconButton aria-label='fingerprint' color='secondary'>
        <Fingerprint />
      </IconButton>
      <IconButton aria-label='fingerprint' color='success'>
        <Fingerprint />
      </IconButton>
    </Stack>
  );
}
