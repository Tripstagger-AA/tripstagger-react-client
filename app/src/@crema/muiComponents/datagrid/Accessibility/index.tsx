import Grid from '@mui/material/Grid';
import React from 'react';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import DensitySelectorGridSource from '!raw-loader!./DensitySelectorGrid';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import DensitySelectorSmallGridSource from '!raw-loader!./DensitySelectorSmallGrid';

import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import DensitySelectorGrid from './DensitySelectorGrid';
import DensitySelectorSmallGrid from './DensitySelectorGrid';

const Accessibility = () => {
  return (
    <>
      <AppComponentHeader
        title='Accessibility'
        description='The Data Grid has complete accessibility support. For instance, every cell is accessible using the keyboard.'
        refUrl='https://mui.com/components/data-grid/accessibility/'
      />

      <AppGridContainer>
        <Grid item xs={12}>
          <AppComponentCard
            title='DensitySelectorGrid'
            component={DensitySelectorGrid}
            source={DensitySelectorGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='DensitySelectorSmallGrid'
            component={DensitySelectorSmallGrid}
            source={DensitySelectorSmallGridSource}
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Accessibility;
