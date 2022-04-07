import {Box} from '@mui/material';
import React, {ReactNode} from 'react';

interface AppContentViewWrapperProperties {
  children: ReactNode;
}

const AppContentViewWrapper: React.FC<AppContentViewWrapperProperties> = ({children, ...rest}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        maxWidth: {xl: 1650},
        mx: {xl: 'auto'},
        width: {xl: '100%'},
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default AppContentViewWrapper;