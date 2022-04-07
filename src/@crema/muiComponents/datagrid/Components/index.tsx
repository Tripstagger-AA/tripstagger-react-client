import Grid from '@mui/material/Grid';
import React from 'react';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import CellWithPopoverSource from '!raw-loader!./CellWithPopover';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import CustomColumnMenuSource from '!raw-loader!./CustomColumnMenu';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import CustomEmptyOverlayGridSource from '!raw-loader!./CustomEmptyOverlayGrid';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import CustomFooterSource from '!raw-loader!./CustomFooter';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import CustomLoadingOverlayGridSource from '!raw-loader!./CustomLoadingOverlayGrid';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import CustomPaginationGridSource from '!raw-loader!./CustomPaginationGrid';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import CustomSortIconsSource from '!raw-loader!./CustomSortIcons';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import CustomToolbarGridSource from '!raw-loader!./CustomToolbarGrid';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import RowContextMenuSource from '!raw-loader!./RowContextMenu';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ToolbarGridSource from '!raw-loader!./ToolbarGrid';

import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import CellWithPopover from './CellWithPopover';
import CustomColumnMenu from './CustomColumnMenu';
import CustomEmptyOverlayGrid from './CustomEmptyOverlayGrid';
import CustomFooter from './CustomFooter';
import CustomLoadingOverlayGrid from './CustomLoadingOverlayGrid';
import CustomPaginationGrid from './CustomPaginationGrid';
import CustomSortIcons from './CustomSortIcons';
import CustomToolbarGrid from './CustomToolbarGrid';
import RowContextMenu from './RowContextMenu';
import ToolbarGrid from './ToolbarGrid';

const Components = () => {
  return (
    <>
      <AppComponentHeader
        title='Components'
        description='Easily export the rows in various file formats such as CSV, Excel, or PDF.'
        refUrl='https://mui.com/components/data-grid/components/'
      />

      <AppGridContainer>
        <Grid item xs={12}>
          <AppComponentCard
            title='Custom Column Menu'
            component={CustomColumnMenu}
            source={CustomColumnMenuSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Toolbar Grid'
            component={ToolbarGrid}
            source={ToolbarGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Custom Toolbar Grid'
            component={CustomToolbarGrid}
            source={CustomToolbarGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Custom Footer'
            component={CustomFooter}
            source={CustomFooterSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Custom Pagination Grid'
            component={CustomPaginationGrid}
            source={CustomPaginationGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Custom Loading Over layGrid'
            component={CustomLoadingOverlayGrid}
            source={CustomLoadingOverlayGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Custom Empty Over layGrid'
            component={CustomEmptyOverlayGrid}
            source={CustomEmptyOverlayGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Row Context Menu'
            component={RowContextMenu}
            source={RowContextMenuSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Cell With Popover'
            component={CellWithPopover}
            source={CellWithPopoverSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Cell With Popover'
            component={CellWithPopover}
            source={CellWithPopoverSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Custom Sort Icons'
            component={CustomSortIcons}
            source={CustomSortIconsSource}
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Components;
