import AssignmentIcon from '@mui/icons-material/Assignment';
import Avatar from '@mui/material/Avatar';
import {deepOrange, green} from '@mui/material/colors';
import Stack from '@mui/material/Stack';
import * as React from 'react';

export default function VariantAvatars() {
  return (
    <Stack direction='row' spacing={2}>
      <Avatar sx={{bgcolor: deepOrange[500]}} variant='square'>
        N
      </Avatar>
      <Avatar sx={{bgcolor: green[500]}} variant='rounded'>
        <AssignmentIcon />
      </Avatar>
    </Stack>
  );
}
