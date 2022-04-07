import Grid from '@mui/material/Grid';
import React from 'react';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ColorSliderSource from '!raw-loader!./Color';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ContinuousSliderSource from '!raw-loader!./ContinuousSliders';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import CustomizedSliderSource from '!raw-loader!./Customization';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import DiscreteSliderMarksSource from '!raw-loader!./CustomMarks';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import DiscreteSliderSource from '!raw-loader!./DiscreteSliders';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import InputSliderSource from '!raw-loader!./InputSlider';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import TrackInvertedSliderSource from '!raw-loader!./InvertedTrack';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import DiscreteSliderLabelSource from '!raw-loader!./LabelAlwaysVisible';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import MinimumDistanceSliderSource from '!raw-loader!./MinimumDistance';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import MusicPlayerSliderSource from '!raw-loader!./MusicPlayer';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import NonLinearSliderSource from '!raw-loader!./NonLinearScale';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import RangeSliderSource from '!raw-loader!./RangeSlider';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import TrackFalseSliderSource from '!raw-loader!./RemovedTrack';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import DiscreteSliderValuesSource from '!raw-loader!./RestrictedValues';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import SliderSizesSource from '!raw-loader!./Sizes';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import DiscreteSliderStepsSource from '!raw-loader!./SmallSteps';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import UnstyledSliderSource from '!raw-loader!./Unstyled';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import VerticalSliderSource from '!raw-loader!./VerticalSliders';

import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import ColorSlider from './Color';
import ContinuousSlider from './ContinuousSliders';
import CustomizedSlider from './Customization';
import DiscreteSliderMarks from './CustomMarks';
import DiscreteSlider from './DiscreteSliders';
import InputSlider from './InputSlider';
import TrackInvertedSlider from './InvertedTrack';
import DiscreteSliderLabel from './LabelAlwaysVisible';
import MinimumDistanceSlider from './MinimumDistance';
import MusicPlayerSlider from './MusicPlayer';
import NonLinearSlider from './NonLinearScale';
import RangeSlider from './RangeSlider';
import TrackFalseSlider from './RemovedTrack';
import DiscreteSliderValues from './RestrictedValues';
import SliderSizes from './Sizes';
import DiscreteSliderSteps from './SmallSteps';
import UnstyledSlider from './Unstyled';
import VerticalSlider from './VerticalSliders';

const Slider = () => {
  return (
    <>
      <AppComponentHeader
        title='Slider'
        description='Sliders allow users to make selections from a range of values.'
        refUrl='https://mui.com/components/slider/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Basic select'
            component={ContinuousSlider}
            source={ContinuousSliderSource}
            noScrollbar
            description='Continuous sliders allow users to select a value along a subjective range.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Sizes'
            component={SliderSizes}
            source={SliderSizesSource}
            noScrollbar
            description='For smaller slider, use the prop size="small".'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Discrete Slider'
            component={DiscreteSlider}
            source={DiscreteSliderSource}
            noScrollbar
            description='Discrete sliders can be adjusted to a specific value by referencing its value indicator. You can generate a mark for each step with marks={true}.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Small steps'
            component={DiscreteSliderSteps}
            source={DiscreteSliderStepsSource}
            noScrollbar
            description='You can change the default step increment.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Custom marks'
            component={DiscreteSliderMarks}
            source={DiscreteSliderMarksSource}
            noScrollbar
            description='You can have custom marks by providing a rich array to the marks prop.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Restricted values'
            component={DiscreteSliderValues}
            source={DiscreteSliderValuesSource}
            noScrollbar
            description='You can restrict the selectable values to those provided with the marks prop with step={null}.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Label always visible'
            component={DiscreteSliderLabel}
            source={DiscreteSliderLabelSource}
            noScrollbar
            description='You can force the thumb label to be always visible with valueLabelDisplay="on".'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Range Slider'
            component={RangeSlider}
            source={RangeSliderSource}
            noScrollbar
            description='The slider can be used to set the start and end of a range by supplying an array of values to the value prop.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Minimum Distance'
            component={MinimumDistanceSlider}
            source={MinimumDistanceSliderSource}
            noScrollbar
            description='You can enforce a minimum distance between values in the onChange event handler.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Slider with input field'
            component={InputSlider}
            source={InputSliderSource}
            noScrollbar
            description='In this example, an input allows a discrete value to be set.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Customized Slider'
            component={CustomizedSlider}
            source={CustomizedSliderSource}
            noScrollbar
            description='Here are some examples of customizing the component. You can learn more about this in the overrides documentation page.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Music Player Slider'
            component={MusicPlayerSlider}
            source={MusicPlayerSliderSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Vertical Slider'
            component={VerticalSlider}
            source={VerticalSliderSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Removed track'
            component={TrackFalseSlider}
            source={TrackFalseSliderSource}
            noScrollbar
            description='The track can be turned off with track={false}.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Inverted track'
            component={TrackInvertedSlider}
            source={TrackInvertedSliderSource}
            noScrollbar
            description='The track can be inverted with track="inverted".'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Non-linear scale'
            component={NonLinearSlider}
            source={NonLinearSliderSource}
            noScrollbar
            description='You can use the scale prop to represent the value on a different scale.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Unstyled'
            component={UnstyledSlider}
            source={UnstyledSliderSource}
            noScrollbar
            description='The slider also comes with an unstyled version. It ideal for doing heavy customizations and minimizing bundle size.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Color'
            component={ColorSlider}
            source={ColorSliderSource}
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Slider;
