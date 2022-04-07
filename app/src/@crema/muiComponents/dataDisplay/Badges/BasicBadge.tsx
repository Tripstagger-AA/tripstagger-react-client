import MailIcon from '@mui/icons-material/Mail';
import Badge from '@mui/material/Badge';
import * as React from 'react';

export default function SimpleBadge() {
  return (
    <Badge badgeContent={4} color='primary'>
      <MailIcon color='action' />
    </Badge>
  );
}
