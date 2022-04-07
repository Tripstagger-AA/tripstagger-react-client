import Grid from '@mui/material/Grid';
import React from 'react';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import PopperPopupStateSource from '!raw-loader!./PopperPopupState';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import PositionedPopperSource from '!raw-loader!./PositionedPopper';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import SimplePopperSource from '!raw-loader!./SimplePopper';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import TransitionsPopperSource from '!raw-loader!./TransitionsPopper';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import VirtualElementPopperSource from '!raw-loader!./VirtualElementPopper';

import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import PopperPopupState from './PopperPopupState';
import PositionedPopper from './PositionedPopper';
import SimplePopper from './SimplePopper';
import TransitionsPopper from './TransitionsPopper';
import VirtualElementPopper from './VirtualElementPopper';

const Popper = () => {
  return (
    <>
      <AppComponentHeader
        title='Popper'
        description='A Popper can be used to display some content on top of another. Its an alternative to react-popper.'
        refUrl='https://mui.com/components/popper/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Simple Popper'
            component={SimplePopper}
            source={SimplePopperSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Transitions Popper'
            component={TransitionsPopper}
            source={TransitionsPopperSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='PositionedPopper'
            component={PositionedPopper}
            source={PositionedPopperSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='VirtualElementPopper'
            component={VirtualElementPopper}
            source={VirtualElementPopperSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='PopperPopupState'
            component={PopperPopupState}
            source={PopperPopupStateSource}
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Popper;
