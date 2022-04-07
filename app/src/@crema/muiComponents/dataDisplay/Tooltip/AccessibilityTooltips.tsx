import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import * as React from 'react';

export default function AccessibilityTooltips() {
  return (
    <div>
      <Tooltip title='Delete'>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <Tooltip describeChild title='Does not add if it already exists.'>
        <Button>Add</Button>
      </Tooltip>
    </div>
  );
}
