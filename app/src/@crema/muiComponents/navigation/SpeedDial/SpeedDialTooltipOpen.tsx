import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import PrintIcon from '@mui/icons-material/Print';
import SaveIcon from '@mui/icons-material/Save';
import ShareIcon from '@mui/icons-material/Share';
import Backdrop from '@mui/material/Backdrop';
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

export default function SpeedDialTooltipOpen() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{height: 330, transform: 'translateZ(0px)', flexGrow: 1}}>
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel='SpeedDial tooltip example'
        sx={{position: 'absolute', bottom: 16, right: 16}}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map(action => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}