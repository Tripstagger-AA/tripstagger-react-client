import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import {styled} from '@mui/material/styles';
import * as React from 'react';

const Input = styled('input')({
  display: 'none',
});

export default function UploadButtons() {
  return (
    <Stack direction='row' alignItems='center' spacing={2}>
      <label htmlFor='contained-button-file'>
        <Input accept='image/*' id='contained-button-file' multiple type='file' />
        <Button variant='contained' component='span'>
          Upload
        </Button>
      </label>
      <label htmlFor='icon-button-file'>
        <Input accept='image/*' id='icon-button-file' type='file' />
        <IconButton color='primary' aria-label='upload picture' component='span'>
          <PhotoCamera />
        </IconButton>
      </label>
    </Stack>
  );
}
