import Grid from '@mui/material/Grid';
import React from 'react';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import CustomLocaleTextGridSource from '!raw-loader!./CustomLocaleTextGrid';

import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import CustomLocaleTextGrid from './CustomLocaleTextGrid';

const Localization = () => {
  return (
    <>
      <AppComponentHeader
        title='Localization'
        description='The Data Grid allows to support users from different locales, with formatting, RTL, and localized strings.'
        refUrl='https://mui.com/components/data-grid/localization/'
      />

      <AppGridContainer>
        <Grid item xs={12}>
          <AppComponentCard
            title='Custom Locale Text Grid'
            component={CustomLocaleTextGrid}
            source={CustomLocaleTextGridSource}
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Localization;
