import MailIcon from '@mui/icons-material/Mail';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import * as React from 'react';

export default function DotBadge() {
  return (
    <Box sx={{color: 'action.active'}}>
      <Badge color='secondary' variant='dot'>
        <MailIcon />
      </Badge>
    </Box>
  );
}
