import Box from '@mui/material/Box';
import NoSsr from '@mui/material/NoSsr';
import * as React from 'react';

export default function SimpleNoSsr() {
  return (
    <div>
      <Box sx={{p: 2, bgcolor: 'primary.main', color: 'primary.contrastText'}}>
        Server and Client
      </Box>
      <NoSsr>
        <Box
          sx={{
            p: 2,
            bgcolor: 'secondary.main',
            color: 'secondary.contrastText',
          }}
        >
          Client only
        </Box>
      </NoSsr>
    </div>
  );
}
