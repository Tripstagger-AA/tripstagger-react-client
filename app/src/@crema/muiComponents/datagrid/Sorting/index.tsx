import Grid from '@mui/material/Grid';
import React from 'react';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import BasicSortingGridSource from '!raw-loader!./BasicSortingGrid';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ComparatorSortingGridSource from '!raw-loader!./ComparatorSortingGrid';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import DisableSortingGridSource from '!raw-loader!./DisableSortingGrid';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import MultiSortingGridSource from '!raw-loader!./MultiSortingGrid';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import OrderSortingGridSource from '!raw-loader!./OrderSortingGrid';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ServerSortingGridSource from '!raw-loader!./ServerSortingGrid';

import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import BasicSortingGrid from './BasicSortingGrid';
import ComparatorSortingGrid from './ComparatorSortingGrid';
import DisableSortingGrid from './DisableSortingGrid';
import MultiSortingGrid from './MultiSortingGrid';
import OrderSortingGrid from './OrderSortingGrid';
import ServerSortingGrid from './ServerSortingGrid';

const Sorting = () => {
  return (
    <>
      <AppComponentHeader
        title='Sorting'
        description='Sorting allows ordering records in the data grid.'
        refUrl='https://mui.com/components/data-grid/sorting/'
      />

      <AppGridContainer>
        <Grid item xs={12}>
          <AppComponentCard
            title='BasicSortingGrid'
            component={BasicSortingGrid}
            source={BasicSortingGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='ComparatorSortingGrid'
            component={ComparatorSortingGrid}
            source={ComparatorSortingGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='OrderSortingGrid'
            component={OrderSortingGrid}
            source={OrderSortingGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='DisableSortingGrid'
            component={DisableSortingGrid}
            source={DisableSortingGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='ServerSortingGrid'
            component={ServerSortingGrid}
            source={ServerSortingGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='MultiSortingGrid'
            component={MultiSortingGrid}
            source={MultiSortingGridSource}
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Sorting;
