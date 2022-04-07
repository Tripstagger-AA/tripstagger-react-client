import Grid from '@mui/material/Grid';
import React from 'react';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import FixedBottomNavigationSource from '!raw-loader!./FixedBottomNavigation';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import LabelBottomNavigationSource from '!raw-loader!./LabelBottomNavigation';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import SimpleBottomNavigationSource from '!raw-loader!./SimpleBottomNavigation';

import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import FixedBottomNavigation from './FixedBottomNavigation';
import LabelBottomNavigation from './LabelBottomNavigation';
import SimpleBottomNavigation from './SimpleBottomNavigation';

const BottomNavigation = () => {
  return (
    <>
      <AppComponentHeader
        title='Bottom Navigation'
        description='Bottom navigation bars allow movement between primary destinations in an app.'
        refUrl='https://mui.com/components/bottom-navigation/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Bottom Navigation'
            component={SimpleBottomNavigation}
            source={SimpleBottomNavigationSource}
            noScrollbar
            description='When there are only three actions, display both icons and text labels at all times.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Label Bottom Navigation'
            component={LabelBottomNavigation}
            source={LabelBottomNavigationSource}
            noScrollbar
            description='When there are only three actions, display both icons and text labels at all times.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Fixed Bottom Navigation'
            component={FixedBottomNavigation}
            source={FixedBottomNavigationSource}
            description='When there are only three actions, display both icons and text labels at all times.'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default BottomNavigation;
