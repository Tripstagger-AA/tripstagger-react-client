import Grid from '@mui/material/Grid';
import React from 'react';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ActionAlertsSource from '!raw-loader!./ActionAlerts';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import BasicAlertsSource from '!raw-loader!./BasicAlerts';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ColorAlertsSource from '!raw-loader!./ColorAlerts';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import DescriptionAlertsSource from '!raw-loader!./DescriptionAlerts';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import FilledSource from '!raw-loader!./Filled';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import IconAlertsSource from '!raw-loader!./IconAlerts';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import TransitionAlertsSource from '!raw-loader!./TransitionAlerts';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import VariantsSource from '!raw-loader!./Variants';

import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import ActionAlerts from './ActionAlerts';
import BasicAlerts from './BasicAlerts';
import ColorAlerts from './ColorAlerts';
import DescriptionAlerts from './DescriptionAlerts';
import Filled from './Filled';
import IconAlerts from './IconAlerts';
import TransitionAlerts from './TransitionAlerts';
import Variants from './Variants';

const Alert = () => {
  return (
    <>
      <AppComponentHeader
        title='Alert'
        description='An alert displays a short, important message in a way that attracts the users attention without interrupting the users task.'
        refUrl='https://mui.com/components/alert/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Basic alerts'
            component={BasicAlerts}
            source={BasicAlertsSource}
            noScrollbar
            description='The alert offers four severity levels that set a distinctive icon and color.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Variants'
            component={Variants}
            source={VariantsSource}
            noScrollbar
            description='The alert offers four severity levels that set a distinctive icon and color.'
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Action Alerts'
            component={ActionAlerts}
            source={ActionAlertsSource}
            noScrollbar
            description='The alert offers four severity levels that set a distinctive icon and color.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='TransitionAlerts'
            component={TransitionAlerts}
            source={TransitionAlertsSource}
            noScrollbar
            description='The alert offers four severity levels that set a distinctive icon and color.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Icon Alerts'
            component={IconAlerts}
            source={IconAlertsSource}
            noScrollbar
            description='The alert offers four severity levels that set a distinctive icon and color.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Color Alerts'
            component={ColorAlerts}
            source={ColorAlertsSource}
            noScrollbar
            description='The alert offers four severity levels that set a distinctive icon and color.'
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Filled'
            component={Filled}
            source={FilledSource}
            noScrollbar
            description='The alert offers four severity levels that set a distinctive icon and color.'
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='DescriptionAlerts'
            component={DescriptionAlerts}
            source={DescriptionAlertsSource}
            noScrollbar
            description='The alert offers four severity levels that set a distinctive icon and color.'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Alert;
