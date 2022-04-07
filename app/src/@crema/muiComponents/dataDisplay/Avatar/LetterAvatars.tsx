import Avatar from '@mui/material/Avatar';
import {deepOrange, deepPurple} from '@mui/material/colors';
import Stack from '@mui/material/Stack';
import * as React from 'react';

export default function LetterAvatars() {
  return (
    <Stack direction='row' spacing={2}>
      <Avatar>H</Avatar>
      <Avatar sx={{bgcolor: deepOrange[500]}}>N</Avatar>
      <Avatar sx={{bgcolor: deepPurple[500]}}>OP</Avatar>
    </Stack>
  );
}
