import Grid from '@mui/material/Grid';
import React from 'react';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import BasicPopoverSource from '!raw-loader!./BasicPopover';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import MouseOverPopoverSource from '!raw-loader!./MouseOverPopover';

import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import BasicPopover from './BasicPopover';
import MouseOverPopover from './MouseOverPopover';

const Popover = () => {
  return (
    <>
      <AppComponentHeader
        title='Popover'
        description='A Popover can be used to display some content on top of another.'
        refUrl='https://mui.com/components/popover/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='BasicPopover'
            component={BasicPopover}
            source={BasicPopoverSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Mouse Over Popover'
            component={MouseOverPopover}
            source={MouseOverPopoverSource}
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Popover;
