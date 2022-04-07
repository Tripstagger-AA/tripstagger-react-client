import Grid from '@mui/material/Grid';
import React from 'react';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import BasicFilteringGridSource from '!raw-loader!./BasicFilteringGrid';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ColumnTypeFilteringGridSource from '!raw-loader!./ColumnTypeFilteringGrid';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import CustomRatingOperatorSource from '!raw-loader!./CustomRatingOperator';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import DisableFilteringGridSource from '!raw-loader!./DisableFilteringGrid';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ExtendNumericOperatorSource from '!raw-loader!./ExtendNumericOperator';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import FilterOperatorsSource from '!raw-loader!./FilterOperators';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import MultiFilteringGridSource from '!raw-loader!./MultiFilteringGrid';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import MultiFilteringWithOrGridSource from '!raw-loader!./MultiFilteringWithOrGrid';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import QuickFilteringGridSource from '!raw-loader!./QuickFilteringGrid';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ServerFilterGridSource from '!raw-loader!./ServerFilterGrid';

import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import BasicFilteringGrid from './BasicFilteringGrid';
import ColumnTypeFilteringGrid from './ColumnTypeFilteringGrid';
import CustomRatingOperator from './CustomRatingOperator';
import DisableFilteringGrid from './DisableFilteringGrid';
import ExtendNumericOperator from './ExtendNumericOperator';
import FilterOperators from './FilterOperators';
import MultiFilteringGrid from './MultiFilteringGrid';
import MultiFilteringWithOrGrid from './MultiFilteringWithOrGrid';
import QuickFilteringGrid from './QuickFilteringGrid';
import ServerFilterGrid from './ServerFilterGrid';

const Filtering = () => {
  return (
    <>
      <AppComponentHeader
        title='Filtering'
        description='Filtering helps to view a subset of the records based on a criteria.'
        refUrl='https://mui.com/components/data-grid/filtering/'
      />

      <AppGridContainer>
        <Grid item xs={12}>
          <AppComponentCard
            title='BasicFilteringGrid'
            component={BasicFilteringGrid}
            source={BasicFilteringGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='FilterOperators'
            component={FilterOperators}
            source={FilterOperatorsSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='DisableFilteringGrid'
            component={DisableFilteringGrid}
            source={DisableFilteringGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='ExtendNumericOperator'
            component={ExtendNumericOperator}
            source={ExtendNumericOperatorSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='ColumnTypeFilteringGrid'
            component={ColumnTypeFilteringGrid}
            source={ColumnTypeFilteringGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='CustomRatingOperator'
            component={CustomRatingOperator}
            source={CustomRatingOperatorSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='ServerFilterGrid'
            component={ServerFilterGrid}
            source={ServerFilterGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='MultiFilteringGrid'
            component={MultiFilteringGrid}
            source={MultiFilteringGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='MultiFilteringWithOrGrid'
            component={MultiFilteringWithOrGrid}
            source={MultiFilteringWithOrGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='QuickFilteringGrid'
            component={QuickFilteringGrid}
            source={QuickFilteringGridSource}
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Filtering;
