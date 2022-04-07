import Grid from '@mui/material/Grid';
import React from 'react';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import BasicButtonsSource from '!raw-loader!./BasicButtons';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ButtonBasesSource from '!raw-loader!./ButtonBases';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ButtonSizesSource from '!raw-loader!./ButtonSizes';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ColorButtonsSource from '!raw-loader!./ColorButtons';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ComplexCustomizationSource from '!raw-loader!./ComplexCustomization';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ContainedButtonsSource from '!raw-loader!./ContainedButtons';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import CustomizedButtonsSource from '!raw-loader!./CustomizedButtons';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import DisableElevationSource from '!raw-loader!./DisableElevation';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import IconButtonColorsSource from '!raw-loader!./IconButtonColors';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import IconButtonsSource from '!raw-loader!./IconButtons';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import IconButtonSizesSource from '!raw-loader!./IconButtonSizes';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import IconLabelButtonsSource from '!raw-loader!./IconLabelButtons';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import LoadingButtonsSource from '!raw-loader!./LoadingButtons';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import LoadingButtonsTransitionSource from '!raw-loader!./LoadingButtonsTransition';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import OutlinedButtonsSource from '!raw-loader!./OutlinedButtons';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import TextButtonsSource from '!raw-loader!./TextButtons';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import UploadButtonsSource from '!raw-loader!./UploadButtons';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import UseButtonSource from '!raw-loader!./UseButton';

import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import BasicButtons from './BasicButtons';
import ButtonBases from './ButtonBases';
import ButtonSizes from './ButtonSizes';
import ColorButtons from './ColorButtons';
import ComplexCustomization from './ComplexCustomization';
import ContainedButtons from './ContainedButtons';
import CustomizedButtons from './CustomizedButtons';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import DisableElevation from './DisableElevation';
import IconButtonColors from './IconButtonColors';
import IconButtons from './IconButtons';
import IconButtonSizes from './IconButtonSizes';
import IconLabelButtons from './IconLabelButtons';
import LoadingButtons from './LoadingButtons';
import LoadingButtonsTransition from './LoadingButtonsTransition';
import OutlinedButtons from './OutlinedButtons';
import TextButtons from './TextButtons';
import UploadButtons from './UploadButtons';
import UseButton from './UseButton';

const Buttons = () => {
  return (
    <>
      <AppComponentHeader
        title='Button'
        description='Buttons allow users to take actions, and make choices, with a single tap.'
        refUrl='https://mui.com/components/buttons/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Basic Buttons'
            component={BasicButtons}
            source={BasicButtonsSource}
            noScrollbar
            description='The Button comes with three variants: text (default), contained, and outlined.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Text Buttons'
            component={TextButtons}
            source={TextButtonsSource}
            noScrollbar
            description='Text buttons are typically used for less-pronounced actions, including those located: in dialogs, in cards. In cards, text buttons help maintain an emphasis on card content.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Contained Buttons'
            component={ContainedButtons}
            source={ContainedButtonsSource}
            noScrollbar
            description='Contained buttons are high-emphasis, distinguished by their use of elevation and fill. They contain actions that are primary to your app.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Outlined Buttons'
            component={OutlinedButtons}
            source={OutlinedButtonsSource}
            noScrollbar
            description='Outlined buttons are medium-emphasis buttons. They contain actions that are important but are the primary action in an app.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Color Buttons'
            component={ColorButtons}
            source={ColorButtonsSource}
            noScrollbar
            description='In addition to using the default button colors, you can add custom ones, or disable any you do not need. See the Adding new colors example for more info.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Upload Buttons'
            component={UploadButtons}
            source={UploadButtonsSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Button Sizes'
            component={ButtonSizes}
            source={ButtonSizesSource}
            noScrollbar
            description='For larger or smaller buttons, use the size prop.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Buttons with icons and label'
            component={IconLabelButtons}
            source={IconLabelButtonsSource}
            noScrollbar
            description='Sometimes you might want to have icons for certain buttons to enhance the UX of the application as we recognize logos more easily than plain text. For example, if you have a delete button you can label it with a dustbin icon.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Icon button'
            component={IconButtons}
            source={IconButtonsSource}
            noScrollbar
            description='Icon buttons are commonly found in app bars and toolbars.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Customized Buttons'
            component={CustomizedButtons}
            source={CustomizedButtonsSource}
            noScrollbar
            description='Here are some examples of customizing the component. You can learn more about this in the overrides documentation page.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Loading Buttons'
            component={LoadingButtons}
            source={LoadingButtonsSource}
            noScrollbar
            description='The loading buttons can show loading state and disable interactions.'
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Disable Elevation'
            component={DisableElevation}
            source={DisableElevationSource}
            noScrollbar
            description='You can remove the elevation with the disableElevation prop.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Icon Button Sizes'
            component={IconButtonSizes}
            source={IconButtonSizesSource}
            noScrollbar
            description='For larger or smaller icon buttons, use the size prop.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Icon Button Colors'
            component={IconButtonColors}
            source={IconButtonColorsSource}
            noScrollbar
            description='Use color prop to apply theme color palette to component.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Loading Buttons Transition'
            component={LoadingButtonsTransition}
            source={LoadingButtonsTransitionSource}
            noScrollbar
            description='Toggle the loading switch to see the transition between the different states.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Button Bases'
            component={ButtonBases}
            source={ButtonBasesSource}
            noScrollbar
            description='The Text Buttons, Contained Buttons, Floating Action Buttons and Icon Buttons are built on top of the same component: the ButtonBase. You can take advantage of this lower-level component to build custom interactions.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Use Button'
            component={UseButton}
            source={UseButtonSource}
            noScrollbar
            description='The useButton hook requires the ref of the element itll be used on.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Complex Customization'
            component={ComplexCustomization}
            source={ComplexCustomizationSource}
            noScrollbar
            description='You are not limited to using HTML elements for the button structure. SVG elements, even with complex structure, are equally acceptable.'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Buttons;
