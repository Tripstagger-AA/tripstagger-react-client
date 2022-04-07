import MailIcon from '@mui/icons-material/Mail';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import * as React from 'react';

export default function ColorBadge() {
  return (
    <Stack spacing={2} direction='row'>
      <Badge badgeContent={4} color='secondary'>
        <MailIcon color='action' />
      </Badge>
      <Badge badgeContent={4} color='success'>
        <MailIcon color='action' />
      </Badge>
    </Stack>
  );
}
