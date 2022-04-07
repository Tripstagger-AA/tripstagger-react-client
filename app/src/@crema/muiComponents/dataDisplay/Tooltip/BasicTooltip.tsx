import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import * as React from 'react';

export default function BasicTooltip() {
  return (
    <Tooltip title='Delete'>
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );
}
