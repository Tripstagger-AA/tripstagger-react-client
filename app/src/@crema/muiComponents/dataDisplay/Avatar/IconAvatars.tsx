import AssignmentIcon from '@mui/icons-material/Assignment';
import FolderIcon from '@mui/icons-material/Folder';
import PageviewIcon from '@mui/icons-material/Pageview';
import Avatar from '@mui/material/Avatar';
import {green, pink} from '@mui/material/colors';
import Stack from '@mui/material/Stack';
import * as React from 'react';

export default function IconAvatars() {
  return (
    <Stack direction='row' spacing={2}>
      <Avatar>
        <FolderIcon />
      </Avatar>
      <Avatar sx={{bgcolor: pink[500]}}>
        <PageviewIcon />
      </Avatar>
      <Avatar sx={{bgcolor: green[500]}}>
        <AssignmentIcon />
      </Avatar>
    </Stack>
  );
}
