import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Popper from '@mui/material/Popper';
import * as React from 'react';

export default function TransitionsPopper() {
  const [open, setOpen] = React.useState(false);
  const [anchorElement, setAnchorElement] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElement(event.currentTarget);
    setOpen(previousOpen => !previousOpen);
  };

  const canBeOpen = open && Boolean(anchorElement);
  const id = canBeOpen ? 'transition-popper' : undefined;

  return (
    <div>
      <button aria-describedby={id} type='button' onClick={handleClick}>
        Toggle Popper
      </button>
      <Popper id={id} open={open} anchorEl={anchorElement} transition>
        {({TransitionProps}) => (
          <Fade {...TransitionProps} timeout={350}>
            <Box sx={{border: 1, p: 1, bgcolor: 'background.paper'}}>
              The content of the Popper.
            </Box>
          </Fade>
        )}
      </Popper>
    </div>
  );
}
