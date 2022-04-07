import Grid from '@mui/material/Grid';
import React from 'react';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import AntDesignGridSource from '!raw-loader!./AntDesignGrid';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import StylingAllCellsSource from '!raw-loader!./StylingAllCells';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import StylingCellsGridSource from '!raw-loader!./StylingCellsGrid';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import StylingHeaderGridSource from '!raw-loader!./StylingHeaderGrid';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import StylingRowsGridSource from '!raw-loader!./StylingRowsGrid';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import SxPropSource from '!raw-loader!./SxProp';

import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import AntDesignGrid from './AntDesignGrid';
import StylingAllCells from './StylingAllCells';
import StylingCellsGrid from './StylingCellsGrid';
import StylingHeaderGrid from './StylingHeaderGrid';
import StylingRowsGrid from './StylingRowsGrid';
import SxProperty from './SxProp';

const Styling = () => {
  return (
    <>
      <AppComponentHeader
        title='Styling'
        description='Easily export the rows in various file formats such as CSV, Excel, or PDF.'
        refUrl='https://mui.com/components/data-grid/style/'
      />

      <AppGridContainer>
        <Grid item xs={12}>
          <AppComponentCard
            title='StylingHeaderGrid'
            component={StylingHeaderGrid}
            source={StylingHeaderGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='StylingRowsGrid'
            component={StylingRowsGrid}
            source={StylingRowsGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='StylingCellsGrid'
            component={StylingCellsGrid}
            source={StylingCellsGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='StylingAllCells'
            component={StylingAllCells}
            source={StylingAllCellsSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='AntDesignGrid'
            component={AntDesignGrid}
            source={AntDesignGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Using the Sx Prop'
            component={SxProperty}
            source={SxPropSource}
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Styling;
