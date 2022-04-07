import {Theme} from '@mui/material';
import TableContainer from '@mui/material/TableContainer';
import {SxProps} from '@mui/system';
import React, {ReactNode} from 'react';

interface AppTableContainerProperties {
  children: ReactNode;
  sxStyle?: SxProps<Theme>;
}

const AppTableContainer: React.FC<AppTableContainerProperties> = ({children, sxStyle}) => {
  return (
    <TableContainer
      sx={{
        '& tr > th, & tr > td': {
          whiteSpace: 'nowrap',
        },
        ...sxStyle,
      }}
    >
      {children}
    </TableContainer>
  );
};

export default AppTableContainer;
