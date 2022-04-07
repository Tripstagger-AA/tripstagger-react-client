import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import * as React from 'react';

export default function TextButtons() {
  return (
    <Stack direction='row' spacing={2}>
      <Button>Primary</Button>
      <Button disabled>Disabled</Button>
      <Button href='#text-buttons'>Link</Button>
    </Stack>
  );
}
