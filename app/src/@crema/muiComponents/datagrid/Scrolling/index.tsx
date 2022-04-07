import Grid from '@mui/material/Grid';
import React from 'react';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ScrollPlaygroundSource from '!raw-loader!./ScrollPlayground';

import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import ScrollPlayground from './ScrollPlayground';

const Scrolling = () => {
  return (
    <>
      <AppComponentHeader
        title='Scrolling'
        description=' This section presents how to programmatically control the scroll.'
        refUrl='https://mui.com/components/data-grid/scrolling/'
      />

      <AppGridContainer>
        <Grid item xs={12}>
          <AppComponentCard
            title='Scroll Play ground'
            component={ScrollPlayground}
            source={ScrollPlaygroundSource}
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Scrolling;
