import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import * as React from 'react';

export default function ArrowTooltips() {
  return (
    <Tooltip title='Add' arrow>
      <Button>Arrow</Button>
    </Tooltip>
  );
}
