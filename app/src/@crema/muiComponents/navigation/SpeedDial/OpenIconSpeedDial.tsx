import EditIcon from '@mui/icons-material/Edit';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import PrintIcon from '@mui/icons-material/Print';
import SaveIcon from '@mui/icons-material/Save';
import ShareIcon from '@mui/icons-material/Share';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import * as React from 'react';

const actions = [
  {icon: <FileCopyIcon />, name: 'Copy'},
  {icon: <SaveIcon />, name: 'Save'},
  {icon: <PrintIcon />, name: 'Print'},
  {icon: <ShareIcon />, name: 'Share'},
];

export default function OpenIconSpeedDial() {
  return (
    <Box sx={{height: 320, transform: 'translateZ(0px)', flexGrow: 1}}>
      <SpeedDial
        ariaLabel='SpeedDial openIcon example'
        sx={{position: 'absolute', bottom: 16, right: 16}}
        icon={<SpeedDialIcon openIcon={<EditIcon />} />}
      >
        {actions.map(action => (
          <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} />
        ))}
      </SpeedDial>
    </Box>
  );
}
