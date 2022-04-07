import Grid from '@mui/material/Grid';
import React from 'react';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ColumnVirtualizationGridSource from '!raw-loader!./ColumnVirtualizationGrid';

import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import ColumnVirtualizationGrid from './ColumnVirtualizationGrid';

const Virtualization = () => {
  return (
    <>
      <AppComponentHeader
        title='Virtualization'
        description='The grid is high performing thanks to its rows and columns virtualization engine.'
        refUrl='https://mui.com/components/data-grid/virtualization/'
      />

      <AppGridContainer>
        <Grid item xs={12}>
          <AppComponentCard
            title='ColumnVirtualizationGrid'
            component={ColumnVirtualizationGrid}
            source={ColumnVirtualizationGridSource}
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Virtualization;
