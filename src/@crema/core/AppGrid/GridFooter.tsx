import {Box, CircularProgress, Typography} from '@mui/material';
import React from 'react';

interface GridFooterProperties {
  loading: boolean;
  footerText: string;
}

const GridFooter: React.FC<GridFooterProperties> = ({loading, footerText}) => {
  return loading ? (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        color: theme => theme.palette.text.secondary,
        justifyContent: 'center',
        padding: 8,
        '& .loading': {
          marginLeft: 8,
        },
      }}
    >
      <CircularProgress size={16} />
      <span className='loading'>Loading...</span>
    </Box>
  ) : (
    <Box
      sx={{
        padding: 10,
        color: theme => theme.palette.text.secondary,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Typography>{footerText}</Typography>
    </Box>
  );
};

export default GridFooter;
