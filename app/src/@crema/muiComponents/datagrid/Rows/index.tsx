import Grid from '@mui/material/Grid';
import React from 'react';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ApiRefRowsGridSource from '!raw-loader!./ApiRefRowsGrid';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import DenseHeightGridSource from '!raw-loader!./DenseHeightGrid';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import InfiniteLoadingGridSource from '!raw-loader!./InfiniteLoadingGrid';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import RowsGridSource from '!raw-loader!./RowsGrid';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ThrottledRowsGridSource from '!raw-loader!./ThrottledRowsGrid';

import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import ApiReferenceRowsGrid from './ApiRefRowsGrid';
import DenseHeightGrid from './DenseHeightGrid';
import InfiniteLoadingGrid from './InfiniteLoadingGrid';
import RowsGrid from './RowsGrid';
import ThrottledRowsGrid from './ThrottledRowsGrid';

const Rows = () => {
  return (
    <>
      <AppComponentHeader
        title='Rows'
        description='The portal component renders its children into a new "subtree" outside of current DOM hierarchy.'
        refUrl='https://mui.com/components/portal/'
      />

      <AppGridContainer>
        <Grid item xs={12}>
          <AppComponentCard
            title='InfiniteLoadingGrid'
            component={InfiniteLoadingGrid}
            source={InfiniteLoadingGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='ApiRefRowsGrid'
            component={ApiReferenceRowsGrid}
            source={ApiRefRowsGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='ThrottledRowsGrid'
            component={ThrottledRowsGrid}
            source={ThrottledRowsGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='DenseHeightGrid'
            component={DenseHeightGrid}
            source={DenseHeightGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='RowsGrid'
            component={RowsGrid}
            source={RowsGridSource}
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Rows;
