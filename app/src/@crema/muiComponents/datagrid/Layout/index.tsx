import Grid from '@mui/material/Grid';
import React from 'react';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import AutoHeightGridSource from '!raw-loader!./AutoHeightGrid';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import FixedSizeGridSource from '!raw-loader!./FixedSizeGrid';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import FlexLayoutGridSource from '!raw-loader!./FlexLayoutGrid';

import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import AutoHeightGrid from './AutoHeightGrid';
import FixedSizeGrid from './FixedSizeGrid';
import FlexLayoutGrid from './FlexLayoutGrid';

const Layout = () => {
  return (
    <>
      <AppComponentHeader
        title='Layout'
        description='A textarea component for React which grows with content.'
        refUrl='https://mui.com/components/data-grid/layout/'
      />

      <AppGridContainer>
        <Grid item xs={12}>
          <AppComponentCard
            title='FlexLayoutGrid'
            component={FlexLayoutGrid}
            source={FlexLayoutGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='FixedSizeGrid'
            component={FixedSizeGrid}
            source={FixedSizeGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='AutoHeightGrid'
            component={AutoHeightGrid}
            source={AutoHeightGridSource}
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Layout;
