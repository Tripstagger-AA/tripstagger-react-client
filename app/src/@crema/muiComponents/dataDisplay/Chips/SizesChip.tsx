import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import * as React from 'react';

export default function SizesChips() {
  return (
    <Stack direction='row' spacing={1}>
      <Chip label='Small' size='small' />
      <Chip label='Small' size='small' variant='outlined' />
    </Stack>
  );
}
