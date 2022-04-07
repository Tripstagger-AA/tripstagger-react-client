import Grid from '@mui/material/Grid';
import React from 'react';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import AlternateTimelineSource from '!raw-loader!./AlternateTimeline';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import BasicTimelineSource from '!raw-loader!./BasicTimeline';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ColorsTimelineSource from '!raw-loader!./ColorsTimeline';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import CustomizedTimelineSource from '!raw-loader!./CustomizedTimeline';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import LeftPositionedTimelineSource from '!raw-loader!./LeftPositionedTimeline';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import OppositeContentTimelineSource from '!raw-loader!./OppositeContentTimeline';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import OutlinedTimelineSource from '!raw-loader!./OutlinedTimeline';

import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import AlternateTimeline from './AlternateTimeline';
import BasicTimeline from './BasicTimeline';
import ColorsTimeline from './ColorsTimeline';
import CustomizedTimeline from './CustomizedTimeline';
import LeftPositionedTimeline from './LeftPositionedTimeline';
import OppositeContentTimeline from './OppositeContentTimeline';
import OutlinedTimeline from './OutlinedTimeline';

const Timeline = () => {
  return (
    <>
      <AppComponentHeader
        title='Timeline'
        description='The timeline displays a list of events in chronological order.'
        refUrl='https://mui.com/components/timeline/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Basic Timeline'
            component={BasicTimeline}
            source={BasicTimelineSource}
            noScrollbar
            description='A basic timeline showing list of events.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Colors'
            component={ColorsTimeline}
            source={ColorsTimelineSource}
            noScrollbar
            description='The TimelineDot can appear in different colors from theme palette.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Left-positioned timeline'
            component={LeftPositionedTimeline}
            source={LeftPositionedTimelineSource}
            noScrollbar
            description='The main content of the timeline can be positioned on the left side relative to the time axis.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Alternating timeline'
            component={AlternateTimeline}
            source={AlternateTimelineSource}
            noScrollbar
            description='The timeline can display the events on alternating sides.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Outlined'
            component={OutlinedTimeline}
            source={OutlinedTimelineSource}
            noScrollbar
            description=''
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Opposite Content'
            component={OppositeContentTimeline}
            source={OppositeContentTimelineSource}
            noScrollbar
            description='The timeline can display content on opposite sides.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Customization'
            component={CustomizedTimeline}
            source={CustomizedTimelineSource}
            noScrollbar
            description='Here is an example of customizing the component. You can learn more about this in the overrides documentation page.'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Timeline;
