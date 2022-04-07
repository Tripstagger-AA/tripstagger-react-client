import {useMediaQuery} from '@mui/material';
import Grid from '@mui/material/Grid';
import React, {ReactNode} from 'react';

import {CremaTheme} from '../../../shared/types/AppContextPropertiesType';

interface AppGridContainerProperties {
  children: ReactNode;

  [x: string]: any;
}

const AppGridContainer: React.FC<AppGridContainerProperties> = ({children, ...others}) => {
  const isMDDown = useMediaQuery((theme: CremaTheme) => theme.breakpoints.down('md'));
  return (
    <Grid container spacing={isMDDown ? 5 : 8} {...others}>
      {children}
    </Grid>
  );
};

export default AppGridContainer;
