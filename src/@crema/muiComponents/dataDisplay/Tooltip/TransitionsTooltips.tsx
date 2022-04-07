import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import * as React from 'react';

export default function TransitionsTooltips() {
  return (
    <div>
      <Tooltip title='Add'>
        <Button>Grow</Button>
      </Tooltip>
      <Tooltip TransitionComponent={Fade} TransitionProps={{timeout: 600}} title='Add'>
        <Button>Fade</Button>
      </Tooltip>
      <Tooltip TransitionComponent={Zoom} title='Add'>
        <Button>Zoom</Button>
      </Tooltip>
    </div>
  );
}
