import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import * as React from 'react';

export default function ColorButtons() {
  return (
    <Stack direction='row' spacing={2}>
      <Button color='secondary'>Secondary</Button>
      <Button variant='contained' color='success'>
        Success
      </Button>
      <Button variant='outlined' color='error'>
        Error
      </Button>
    </Stack>
  );
}
