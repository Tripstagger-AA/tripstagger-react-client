import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import * as React from 'react';

export default function SimplePopper() {
  const [anchorElement, setAnchorElement] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElement(anchorElement ? null : event.currentTarget);
  };

  const open = Boolean(anchorElement);
  const id = open ? 'simple-popper' : undefined;

  return (
    <div>
      <button aria-describedby={id} type='button' onClick={handleClick}>
        Toggle Popper
      </button>
      <Popper id={id} open={open} anchorEl={anchorElement}>
        <Box sx={{border: 1, p: 1, bgcolor: 'background.paper'}}>The content of the Popper.</Box>
      </Popper>
    </div>
  );
}
