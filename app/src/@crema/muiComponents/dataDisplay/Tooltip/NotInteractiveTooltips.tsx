import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import * as React from 'react';

export default function NotInteractiveTooltips() {
  return (
    <Tooltip title='Add' disableInteractive>
      <Button>Not interactive</Button>
    </Tooltip>
  );
}
