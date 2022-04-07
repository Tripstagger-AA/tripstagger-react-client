import {Box} from '@mui/material';
import React, {ReactNode} from 'react';

import {useSidebarContext} from '../../../../utility/AppContextProvider/SidebarContextProvider';

interface SidebarHeaderWrapperProperties {
  children: ReactNode;
}

const SidebarHeaderWrapper: React.FC<SidebarHeaderWrapperProperties> = ({children}) => {
  const {sidebarHeaderColor, isSidebarBgImage} = useSidebarContext();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: isSidebarBgImage ? 'transparent' : sidebarHeaderColor,
        '&:hover': {
          '& .arrowIcon': {
            opacity: 1,
            visibility: 'visible',
          },
        },
      }}
    >
      {children}
    </Box>
  );
};

export default SidebarHeaderWrapper;
