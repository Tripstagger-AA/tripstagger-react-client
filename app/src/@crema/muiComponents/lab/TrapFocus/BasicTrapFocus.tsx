import Box from '@mui/material/Box';
import TrapFocus from '@mui/material/Unstable_TrapFocus';
import * as React from 'react';

export default function BasicTrapFocus() {
  const [open, setOpen] = React.useState(false);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <button type='button' onClick={() => setOpen(true)}>
        Open
      </button>
      {open && (
        <TrapFocus open>
          <Box tabIndex={-1} sx={{mt: 1, p: 1}}>
            <label>
              First name: <input type='text' />
            </label>
            <br />
            <button type='button' onClick={() => setOpen(false)}>
              Close
            </button>
          </Box>
        </TrapFocus>
      )}
    </Box>
  );
}