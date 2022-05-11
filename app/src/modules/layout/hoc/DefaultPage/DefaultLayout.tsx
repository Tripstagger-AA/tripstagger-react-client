import Box from '@mui/material/Box';
import React, {ReactElement} from 'react';

interface Properties {
  children: ReactElement | ReactElement[];
}

export const DefaultLayout: React.FC<Properties> = ({children}) => {
  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        position: 'relative',
        height: '100vh',
        backgroundColor: '#f3f4f6',
        backgroundSize: 'cover',

        '& .scrollbar-container': {
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        },
        '& .main-content-view': {
          padding: 20,
        },
        '& .footer': {
          marginRight: 0,
          marginLeft: 0,
        },
      }}
    >
      {children}
    </Box>
  );
};
