import Grid from '@mui/material/Grid';
import React from 'react';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import BasicColumnsGridSource from '!raw-loader!./BasicColumnsGrid';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ColumnFluidWidthGridSource from '!raw-loader!./ColumnFluidWidthGrid';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ColumnMenuGridSource from '!raw-loader!./ColumnMenuGrid';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ColumnMinWidthGridSource from '!raw-loader!./ColumnMinWidthGrid';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ColumnOrderingDisabledGridSource from '!raw-loader!./ColumnOrderingDisabledGrid';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ColumnOrderingGridSource from '!raw-loader!./ColumnOrderingGrid';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ColumnSelectorGridSource from '!raw-loader!./ColumnSelectorGrid';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ColumnSizingGridSource from '!raw-loader!./ColumnSizingGrid';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ColumnTypesGridSource from '!raw-loader!./ColumnTypesGrid';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ColumnWidthGridSource from '!raw-loader!./ColumnWidthGrid';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import CustomColumnTypesGridSource from '!raw-loader!./CustomColumnTypesGrid';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import HeaderColumnsGridSource from '!raw-loader!./HeaderColumnsGrid';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import RenderCellGridSource from '!raw-loader!./RenderCellGrid';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import RenderExpandCellGridSource from '!raw-loader!./RenderExpandCellGrid';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import RenderHeaderGridSource from '!raw-loader!./RenderHeaderGrid';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ValueFormatterGridSource from '!raw-loader!./ValueFormatterGrid';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ValueGetterGridSource from '!raw-loader!./ValueGetterGrid';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ValueParserGridSource from '!raw-loader!./ValueParserGrid';

import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import BasicColumnsGrid from './BasicColumnsGrid';
import ColumnFluidWidthGrid from './ColumnFluidWidthGrid';
import ColumnMenuGrid from './ColumnMenuGrid';
import ColumnMinWidthGrid from './ColumnMinWidthGrid';
import ColumnOrderingDisabledGrid from './ColumnOrderingDisabledGrid';
import ColumnOrderingGrid from './ColumnOrderingGrid';
import ColumnSelectorGrid from './ColumnSelectorGrid';
import ColumnSizingGrid from './ColumnSizingGrid';
import ColumnTypesGrid from './ColumnTypesGrid';
import ColumnWidthGrid from './ColumnWidthGrid';
import CustomColumnTypesGrid from './CustomColumnTypesGrid';
import HeaderColumnsGrid from './HeaderColumnsGrid';
import RenderCellGrid from './RenderCellGrid';
import RenderExpandCellGrid from './RenderExpandCellGrid';
import RenderHeaderGrid from './RenderHeaderGrid';
import ValueFormatterGrid from './ValueFormatterGrid';
import ValueGetterGrid from './ValueGetterGrid';
import ValueParserGrid from './ValueParserGrid';

const Columns = () => {
  return (
    <>
      <AppComponentHeader
        title='Columns'
        description='A textarea component for React which grows with content.'
        refUrl='https://mui.com/components/data-grid/columns/'
      />

      <AppGridContainer>
        <Grid item xs={12}>
          <AppComponentCard
            title='Basic Columns Grid'
            component={BasicColumnsGrid}
            source={BasicColumnsGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Header Columns Grid'
            component={HeaderColumnsGrid}
            source={HeaderColumnsGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Column Width Grid'
            component={ColumnWidthGrid}
            source={ColumnWidthGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='ColumnMinWidthGrid'
            component={ColumnMinWidthGrid}
            source={ColumnMinWidthGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='ColumnFluidWidthGrid'
            component={ColumnFluidWidthGrid}
            source={ColumnFluidWidthGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='ColumnSizingGrid'
            component={ColumnSizingGrid}
            source={ColumnSizingGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='ValueGetterGrid'
            component={ValueGetterGrid}
            source={ValueGetterGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='ValueFormatterGrid'
            component={ValueFormatterGrid}
            source={ValueFormatterGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='ValueParserGrid'
            component={ValueParserGrid}
            source={ValueParserGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='RenderCellGrid'
            component={RenderCellGrid}
            source={RenderCellGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='RenderExpandCellGrid'
            component={RenderExpandCellGrid}
            source={RenderExpandCellGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='RenderHeaderGrid'
            component={RenderHeaderGrid}
            source={RenderHeaderGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='ColumnTypesGrid'
            component={ColumnTypesGrid}
            source={ColumnTypesGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='CustomColumnTypesGrid'
            component={CustomColumnTypesGrid}
            source={CustomColumnTypesGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='ColumnMenuGrid'
            component={ColumnMenuGrid}
            source={ColumnMenuGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='ColumnSelectorGrid'
            component={ColumnSelectorGrid}
            source={ColumnSelectorGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='ColumnOrderingGrid'
            component={ColumnOrderingGrid}
            source={ColumnOrderingGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='ColumnOrderingDisabledGrid'
            component={ColumnOrderingDisabledGrid}
            source={ColumnOrderingDisabledGridSource}
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Columns;
