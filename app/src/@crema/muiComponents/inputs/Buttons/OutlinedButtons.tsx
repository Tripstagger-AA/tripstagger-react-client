import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import * as React from 'react';

export default function OutlinedButtons() {
  return (
    <Stack direction='row' spacing={2}>
      <Button variant='outlined'>Primary</Button>
      <Button variant='outlined' disabled>
        Disabled
      </Button>
      <Button variant='outlined' href='#outlined-buttons'>
        Link
      </Button>
    </Stack>
  );
}
