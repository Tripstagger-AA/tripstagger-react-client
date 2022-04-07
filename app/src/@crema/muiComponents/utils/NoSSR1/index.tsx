import Grid from '@mui/material/Grid';
import React from 'react';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import FrameDeferringSource from '!raw-loader!./FrameDeferring';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import SimpleNoSsrSource from '!raw-loader!./SimpleNoSsr';

import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import FrameDeferring from './FrameDeferring';
import SimpleNoSsr from './SimpleNoSsr';

const NoSSR1 = () => {
  return (
    <>
      <AppComponentHeader
        title='NoSSR1'
        description='The modal component provides a solid foundation for creating dialogs, popovers, lightboxes, or whatever else.'
        refUrl='https://mui.com/components/no-ssr/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Simple No Ssr'
            component={SimpleNoSsr}
            source={SimpleNoSsrSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='FrameDeferring'
            component={FrameDeferring}
            source={FrameDeferringSource}
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default NoSSR1;
