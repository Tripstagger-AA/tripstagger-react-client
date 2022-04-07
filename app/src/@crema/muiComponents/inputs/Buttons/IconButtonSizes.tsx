import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import * as React from 'react';

export default function IconButtonSizes() {
  return (
    <Stack direction='row' alignItems='center' spacing={1}>
      <IconButton aria-label='delete' size='small'>
        <DeleteIcon fontSize='inherit' />
      </IconButton>
      <IconButton aria-label='delete' size='small'>
        <DeleteIcon fontSize='small' />
      </IconButton>
      <IconButton aria-label='delete' size='large'>
        <DeleteIcon />
      </IconButton>
      <IconButton aria-label='delete' size='large'>
        <DeleteIcon fontSize='inherit' />
      </IconButton>
    </Stack>
  );
}
