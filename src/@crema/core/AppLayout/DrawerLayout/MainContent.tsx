import {Box} from '@mui/material';
import React, {ReactNode} from 'react';

interface MainContentProperties {
  children: ReactNode;

  [x: string]: any;
}

const MainContent: React.FC<MainContentProperties> = ({children, ...rest}) => {
  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        position: 'relative',
        transition: 'all 0.5s ease',
      }}
      className='mainContent'
      {...rest}
    >
      {children}
    </Box>
  );
};

export default MainContent;
