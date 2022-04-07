import {Box} from '@mui/material';
import React, {ReactNode} from 'react';

interface AppsHeaderProperties {
  children: ReactNode;
}

const AppsHeader: React.FC<AppsHeaderProperties> = ({children}) => {
  return (
    <Box
      sx={{
        height: 60,
        display: 'flex',
        alignItems: 'center',
        borderBottom: theme => `1px solid ${theme.palette.divider}`,
        padding: {
          xs: '4px 10px',
          xl: '12px 10px',
        },
      }}
      className='apps-header'
    >
      {children}
    </Box>
  );
};

export default AppsHeader;