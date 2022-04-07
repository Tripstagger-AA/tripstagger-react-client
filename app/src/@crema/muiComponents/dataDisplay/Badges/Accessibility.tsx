import MailIcon from '@mui/icons-material/Mail';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import * as React from 'react';

function notificationsLabel(count: number) {
  if (count === 0) {
    return 'no notifications';
  }
  if (count > 99) {
    return 'more than 99 notifications';
  }
  return `${count} notifications`;
}

export default function AccessibleBadges() {
  return (
    <IconButton aria-label={notificationsLabel(100)}>
      <Badge badgeContent={100} color='secondary'>
        <MailIcon />
      </Badge>
    </IconButton>
  );
}