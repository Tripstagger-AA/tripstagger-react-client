import {Box} from '@mui/material';
import React, {ReactNode} from 'react';

interface AppsFooterProperties {
  children: ReactNode;
}

const AppsFooter: React.FC<AppsFooterProperties> = properties => {
  const {children} = properties;
  return (
    <Box
      sx={{
        px: 5,
        py: 2,
        borderTop: theme => `1px solid ${theme.palette.divider}`,
      }}
    >
      {children}
    </Box>
  );
};

export default AppsFooter;
