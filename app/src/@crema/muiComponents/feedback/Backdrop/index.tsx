import Grid from '@mui/material/Grid';
import React from 'react';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import SimpleBackdropSource from '!raw-loader!./SimpleBackdrop';

import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import SimpleBackdrop from './SimpleBackdrop';

const Backdrop = () => {
  return (
    <>
      <AppComponentHeader
        title='Backdrop'
        description='The backdrop component is used to provide emphasis on a particular element or parts of it.'
        refUrl='https://mui.com/components/backdrop/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Simple Backdrop'
            component={SimpleBackdrop}
            source={SimpleBackdropSource}
            noScrollbar
            description='The alert offers four severity levels that set a distinctive icon and color.'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Backdrop;
