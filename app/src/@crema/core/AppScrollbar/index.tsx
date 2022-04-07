import 'simplebar/src/simplebar.css';

import {styled} from '@mui/material/styles';
import React, {ReactNode} from 'react';
import SimpleBarReact from 'simplebar-react';

const StyledSimpleBarReact = styled(SimpleBarReact)(() => ({
  height: '100%',
  width: '100%',
}));

interface AppScrollbarProperties {
  children: ReactNode;
  className?: string;

  [x: string]: any;
}

const AppScrollbar: React.FC<AppScrollbarProperties> = properties => {
  const {children, ...others} = properties;

  return <StyledSimpleBarReact {...others}>{children}</StyledSimpleBarReact>;
};

export default AppScrollbar;
