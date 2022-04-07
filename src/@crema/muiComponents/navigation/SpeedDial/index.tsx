import Grid from '@mui/material/Grid';
import React from 'react';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import BasicSpeedDialSource from '!raw-loader!./BasicSpeedDial';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ControlledOpenSpeedDialSource from '!raw-loader!./ControlledOpenSpeedDial';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import OpenIconSpeedDialSource from '!raw-loader!./OpenIconSpeedDial';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import PlaygroundSpeedDialSource from '!raw-loader!./PlaygroundSpeedDial';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import SpeedDialTooltipOpenSource from '!raw-loader!./SpeedDialTooltipOpen';

import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import BasicSpeedDial from './BasicSpeedDial';
import ControlledOpenSpeedDial from './ControlledOpenSpeedDial';
import OpenIconSpeedDial from './OpenIconSpeedDial';
import PlaygroundSpeedDial from './PlaygroundSpeedDial';
import SpeedDialTooltipOpen from './SpeedDialTooltipOpen';

const SpeedDial = () => {
  return (
    <>
      <AppComponentHeader
        title='Speed Dial'
        description='When pressed, a floating action button can display three to six related actions in the form of a speed dial.'
        refUrl='https://mui.com/components/speed-dial/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Basic speed dial'
            component={BasicSpeedDial}
            source={BasicSpeedDialSource}
            noScrollbar
            description='The floating action button can display related actions.'
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Controlled Open Speed Dial'
            component={ControlledOpenSpeedDial}
            source={ControlledOpenSpeedDialSource}
            noScrollbar
            description='The floating action button can display related actions.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='OpenIcon Speed Dial'
            component={OpenIconSpeedDial}
            source={OpenIconSpeedDialSource}
            noScrollbar
            description='The floating action button can display related actions.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='SpeedDial Tooltip Open'
            component={SpeedDialTooltipOpen}
            source={SpeedDialTooltipOpenSource}
            noScrollbar
            description='The floating action button can display related actions.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='PlaygroundSpeedDial'
            component={PlaygroundSpeedDial}
            source={PlaygroundSpeedDialSource}
            noScrollbar
            description='The floating action button can display related actions.'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default SpeedDial;
