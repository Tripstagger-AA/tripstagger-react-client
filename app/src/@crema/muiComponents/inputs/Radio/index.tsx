import Grid from '@mui/material/Grid';
import React from 'react';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ColorRadioButtonsSource from '!raw-loader!./Color';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ControlledRadioButtonsGroupSource from '!raw-loader!./Controlled';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import CustomizedRadiosSource from '!raw-loader!./Customization';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import RowRadioButtonsGroupSource from '!raw-loader!./Direction';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import FormControlLabelPlacementSource from '!raw-loader!./LabelPlacement';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import RadioButtonsGroupSource from '!raw-loader!./RadioButtonsGroup';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ErrorRadiosSource from '!raw-loader!./ShowError';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import SizeRadioButtonsSource from '!raw-loader!./Size';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import RadioButtonsSource from '!raw-loader!./StandaloneRadioButtons';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import UseRadioGroupSource from '!raw-loader!./UseRadioGroup';

import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import ColorRadioButtons from './Color';
import ControlledRadioButtonsGroup from './Controlled';
import CustomizedRadios from './Customization';
import RowRadioButtonsGroup from './Direction';
import FormControlLabelPlacement from './LabelPlacement';
import RadioButtonsGroup from './RadioButtonsGroup';
import ErrorRadios from './ShowError';
import SizeRadioButtons from './Size';
import RadioButtons from './StandaloneRadioButtons';
import UseRadioGroup from './UseRadioGroup';

const Radio = () => {
  return (
    <>
      <AppComponentHeader
        title='Radio'
        description='Radio buttons allow the user to select one option from a set.'
        refUrl='https://mui.com/components/radio-buttons/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Radio group'
            component={RadioButtonsGroup}
            source={RadioButtonsGroupSource}
            noScrollbar
            description='RadioGroup is a helpful wrapper used to group Radio components that provides an easier API, and proper keyboard accessibility to the group.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Show error'
            component={ErrorRadios}
            source={ErrorRadiosSource}
            noScrollbar
            description='In general, radio buttons should have a value selected by default. If this is not the case, you can display an error if no value is selected when the form is submitted:'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Controlled'
            component={ControlledRadioButtonsGroup}
            source={ControlledRadioButtonsGroupSource}
            noScrollbar
            description='You can control the radio with the value and onChange props:'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Label placement'
            component={FormControlLabelPlacement}
            source={FormControlLabelPlacementSource}
            noScrollbar
            description='You can change the placement of the label with the FormControlLabel component labelPlacement prop:'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Direction'
            component={RowRadioButtonsGroup}
            source={RowRadioButtonsGroupSource}
            noScrollbar
            description='To lay out the buttons horizontally, set the row prop:'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Standalone radio buttons'
            component={RadioButtons}
            source={RadioButtonsSource}
            noScrollbar
            description='Radio can also be used standalone, without the RadioGroup wrapper.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Size'
            component={SizeRadioButtons}
            source={SizeRadioButtonsSource}
            noScrollbar
            description='Use the size prop or customize the font size of the svg icons to change the size of the radios.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Color'
            component={ColorRadioButtons}
            source={ColorRadioButtonsSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Customization'
            component={CustomizedRadios}
            source={CustomizedRadiosSource}
            noScrollbar
            description='Here is an example of customizing the component. You can learn more about this in the overrides documentation page.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='UseRadioGroup'
            component={UseRadioGroup}
            source={UseRadioGroupSource}
            noScrollbar
            description='The name used to reference the value of the control.'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Radio;