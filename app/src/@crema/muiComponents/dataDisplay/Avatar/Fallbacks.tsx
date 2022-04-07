import Avatar from '@mui/material/Avatar';
import {deepOrange} from '@mui/material/colors';
import Stack from '@mui/material/Stack';
import * as React from 'react';

export default function FallbackAvatars() {
  return (
    <Stack direction='row' spacing={2}>
      <Avatar sx={{bgcolor: deepOrange[500]}} alt='Remy Sharp' src='/broken-image.jpg'>
        B
      </Avatar>
      <Avatar sx={{bgcolor: deepOrange[500]}} alt='Remy Sharp' src='/broken-image.jpg' />
      <Avatar src='/broken-image.jpg' />
    </Stack>
  );
}
