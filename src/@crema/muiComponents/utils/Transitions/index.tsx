import Grid from '@mui/material/Grid';
import React from 'react';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import SimpleCollapseSource from '!raw-loader!./SimpleCollapse';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import SimpleFadeSource from '!raw-loader!./SimpleFade';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import SimpleGrowSource from '!raw-loader!./SimpleGrow';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import SimpleSlideSource from '!raw-loader!./SimpleSlide';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import SimpleZoomSource from '!raw-loader!./SimpleZoom';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import SlideFromContainerSource from '!raw-loader!./SlideFromContainer';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import TransitionGroupExampleSource from '!raw-loader!./TransitionGroupExample';

import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import SimpleCollapse from './SimpleCollapse';
import SimpleFade from './SimpleFade';
import SimpleGrow from './SimpleGrow';
import SimpleSlide from './SimpleSlide';
import SimpleZoom from './SimpleZoom';
import SlideFromContainer from './SlideFromContainer';
import TransitionGroupExample from './TransitionGroupExample';

const Transitions = () => {
  return (
    <>
      <AppComponentHeader
        title='Transitions'
        description='Transitions help to make a UI expressive and easy to use.'
        refUrl='https://mui.com/components/transitions/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='SimpleCollapse'
            component={SimpleCollapse}
            source={SimpleCollapseSource}
            description=' Expand from the start edge of the child element. Use the orientation prop if you need a horizontal collapse. The collapsedSize prop can be used to set the minimum width/height when not expanded.'
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Simple Fade'
            component={SimpleFade}
            source={SimpleFadeSource}
            description=' Fade in from transparent to opaque.'
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='SimpleGrow'
            component={SimpleGrow}
            source={SimpleGrowSource}
            description=' Expands outwards from the center of the child element, while also fading in from transparent to opaque.'
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Simple Slide'
            component={SimpleSlide}
            source={SimpleSlideSource}
            description=' Slide in from the edge of the screen. The direction prop controls which edge of the screen the transition starts from.'
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='SlideFromContainer'
            component={SlideFromContainer}
            source={SlideFromContainerSource}
            description=' The Slide component also accepts container prop, which is a reference to a DOM node. If this prop is set, the Slide component will slide from the edge of that DOM node.'
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Simple Zoom'
            component={SimpleZoom}
            source={SimpleZoomSource}
            description='Expand outwards from the center of the child element.'
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='TransitionGroupExample'
            component={TransitionGroupExample}
            source={TransitionGroupExampleSource}
            description='Expand outwards from the center of the child element.'
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Transitions;
