import Grid from '@mui/material/Grid';
import React from 'react';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import DoubleClickWithCtrlToEditSource from '!raw-loader!./DoubleClickWithCtrlToEdit';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import SubscribeToEventsSource from '!raw-loader!./SubscribeToEvents';

import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import DoubleClickWithCtrlToEdit from './DoubleClickWithCtrlToEdit';
import SubscribeToEvents from './SubscribeToEvents';

const Events = () => {
  return (
    <>
      <AppComponentHeader
        title='Events'
        description='The data grid emits events that can be subscribed to attach custom behavior.'
        refUrl='https://mui.com/components/data-grid/events/'
      />

      <AppGridContainer>
        <Grid item xs={12}>
          <AppComponentCard
            title='SubscribeToEvents'
            component={SubscribeToEvents}
            source={SubscribeToEventsSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='DoubleClickWithCtrlToEdit'
            component={DoubleClickWithCtrlToEdit}
            source={DoubleClickWithCtrlToEditSource}
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Events;
