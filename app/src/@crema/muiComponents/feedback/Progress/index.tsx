import Grid from '@mui/material/Grid';
import React from 'react';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import CircularColorSource from '!raw-loader!./CircularColor';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import CircularDeterminateSource from '!raw-loader!./CircularDeterminate';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import CircularIndeterminateSource from '!raw-loader!./CircularIndeterminate';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import CircularIntegrationSource from '!raw-loader!./CircularIntegration';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import CircularStaticSource from '!raw-loader!./CircularStatic';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import CircularUnderLoadSource from '!raw-loader!./CircularUnderLoad';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import CustomizedProgressBarsSource from '!raw-loader!./CustomizedProgressBars';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import DelayingAppearanceSource from '!raw-loader!./DelayingAppearance';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import LinearBufferSource from '!raw-loader!./LinearBuffer';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import LinearColorSource from '!raw-loader!./LinearColor';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import LinearDeterminateSource from '!raw-loader!./LinearDeterminate';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import LinearIndeterminateSource from '!raw-loader!./LinearIndeterminate';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import LinearWithValueLabelSource from '!raw-loader!./LinearWithValueLabel';

import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import CircularColor from './CircularColor';
import CircularDeterminate from './CircularDeterminate';
import CircularIndeterminate from './CircularIndeterminate';
import CircularIntegration from './CircularIntegration';
import CircularStatic from './CircularStatic';
import CircularUnderLoad from './CircularUnderLoad';
import CustomizedProgressBars from './CustomizedProgressBars';
import DelayingAppearance from './DelayingAppearance';
import LinearBuffer from './LinearBuffer';
import LinearColor from './LinearColor';
import LinearDeterminate from './LinearDeterminate';
import LinearIndeterminate from './LinearIndeterminate';
import LinearWithValueLabel from './LinearWithValueLabel';

const Progress = () => {
  return (
    <>
      <AppComponentHeader
        title='Progress'
        description='Progress indicators commonly known as spinners, express an unspecified wait time or display the length of a process'
        refUrl='https://mui.com/components/progress/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Circular indeterminate'
            component={CircularIndeterminate}
            source={CircularIndeterminateSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Circular Color'
            component={CircularColor}
            source={CircularColorSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Circular Determinate'
            component={CircularDeterminate}
            source={CircularDeterminateSource}
            noScrollbar
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Circular Static'
            component={CircularStatic}
            source={CircularStaticSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Linear Indeterminate'
            component={LinearIndeterminate}
            source={LinearIndeterminateSource}
            noScrollbar
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Linear Determinate'
            component={LinearDeterminate}
            source={LinearDeterminateSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Linear Buffer'
            component={LinearBuffer}
            source={LinearBufferSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Linear With Value Label'
            component={LinearWithValueLabel}
            source={LinearWithValueLabelSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Linear Color'
            component={LinearColor}
            source={LinearColorSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Circular Under Load'
            component={CircularUnderLoad}
            source={CircularUnderLoadSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='CustomizedProgressBars'
            component={CustomizedProgressBars}
            source={CustomizedProgressBarsSource}
            noScrollbar
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Circular Integration'
            component={CircularIntegration}
            source={CircularIntegrationSource}
            noScrollbar
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='DelayingAppearance'
            component={DelayingAppearance}
            source={DelayingAppearanceSource}
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Progress;
