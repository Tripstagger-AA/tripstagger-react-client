import Grid from '@mui/material/Grid';
import React from 'react';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import AcccessibleTableSource from '!raw-loader!./AcccessibleTable';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import BasicTableSource from '!raw-loader!./BasicTable';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import CollapsibleTableSource from '!raw-loader!./CollapsibleTable';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ColumnGroupingSource from '!raw-loader!./ColumnGrouping';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ColumnGroupingTableSource from '!raw-loader!./ColumnGroupingTable';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import CustomizedTablesSource from '!raw-loader!./CustomizedTables';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import CustomPaginationActionsTableSource from '!raw-loader!./Custompaginationactions';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import DataTableSource from '!raw-loader!./DataTable';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import DenseTableSource from '!raw-loader!./DenseTable';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import EnhancedTableSource from '!raw-loader!./EnhancedTable';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ReactVirtualizedTableSource from '!raw-loader!./ReactVirtualizedTable';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import SpanningTableSource from '!raw-loader!./SpanningTable';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import StickyHeadTableSource from '!raw-loader!./StickyHeadTable';

import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import AcccessibleTable from './AcccessibleTable';
import BasicTable from './BasicTable';
import CollapsibleTable from './CollapsibleTable';
import ColumnGrouping from './ColumnGrouping';
import ColumnGroupingTable from './ColumnGroupingTable';
import CustomizedTables from './CustomizedTables';
import CustomPaginationActionsTable from './Custompaginationactions';
import DataTable from './DataTable';
import DenseTable from './DenseTable';
import EnhancedTable from './EnhancedTable';
import ReactVirtualizedTable from './ReactVirtualizedTable';
import SpanningTable from './SpanningTable';
import StickyHeadTable from './StickyHeadTable';

const Table = () => {
  return (
    <>
      <AppComponentHeader
        title='Table'
        description='Tables display sets of data. They can be fully customized.'
        refUrl='https://mui.com/components/tables/'
      />

      <AppGridContainer>
        <Grid item xs={12}>
          <AppComponentCard
            title='Basic table'
            component={BasicTable}
            source={BasicTableSource}
            noScrollbar
            description='A simple example with no frills.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Data Table'
            component={DataTable}
            source={DataTableSource}
            noScrollbar
            description='A simple example with no frills.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Dense Table'
            component={DenseTable}
            source={DenseTableSource}
            noScrollbar
            description='A simple example with no frills.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Enhanced Table'
            component={EnhancedTable}
            source={EnhancedTableSource}
            noScrollbar
            description='A simple example with no frills.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Column Grouping'
            component={ColumnGrouping}
            source={ColumnGroupingSource}
            noScrollbar
            description='A simple example with no frills.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Custom Pagination Actions Table'
            component={CustomPaginationActionsTable}
            source={CustomPaginationActionsTableSource}
            noScrollbar
            description='A simple example with no frills.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Sticky Head Table'
            component={StickyHeadTable}
            source={StickyHeadTableSource}
            noScrollbar
            description='A simple example with no frills.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Column Grouping Table'
            component={ColumnGroupingTable}
            source={ColumnGroupingTableSource}
            noScrollbar
            description='A simple example with no frills.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='CollapsibleTable'
            component={CollapsibleTable}
            source={CollapsibleTableSource}
            noScrollbar
            description='A simple example with no frills.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Spanning Table'
            component={SpanningTable}
            source={SpanningTableSource}
            noScrollbar
            description='A simple example with no frills.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Acccessible Table'
            component={AcccessibleTable}
            source={AcccessibleTableSource}
            noScrollbar
            description='A simple example with no frills.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='CustomizedTables'
            component={CustomizedTables}
            source={CustomizedTablesSource}
            noScrollbar
            description='A simple example with no frills.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Virtualized Table'
            component={ReactVirtualizedTable}
            source={ReactVirtualizedTableSource}
            noScrollbar
            description='A simple example with no frills.'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Table;
