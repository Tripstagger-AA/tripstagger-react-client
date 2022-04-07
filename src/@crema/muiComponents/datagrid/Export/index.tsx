import Grid from '@mui/material/Grid';
import React from 'react';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ExportSelectorGridSource from '!raw-loader!./ExportSelectorGrid';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ExportSelectorGridPrintSource from '!raw-loader!./ExportSelectorGridPrint';

import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import ExportSelectorGrid from './ExportSelectorGrid';
import ExportSelectorGridPrint from './ExportSelectorGridPrint';

const Export = () => {
  return (
    <>
      <AppComponentHeader
        title='Export'
        description='Easily export the rows in various file formats such as CSV, Excel, or PDF.'
        refUrl='https://mui.com/components/data-grid/export/'
      />

      <AppGridContainer>
        <Grid item xs={12}>
          <AppComponentCard
            title='ExportSelectorGrid'
            component={ExportSelectorGrid}
            source={ExportSelectorGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='ExportSelectorGridPrint'
            component={ExportSelectorGridPrint}
            source={ExportSelectorGridPrintSource}
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Export;
