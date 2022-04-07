import Grid from '@mui/material/Grid';
import React from 'react';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ColorToggleButtonSource from '!raw-loader!./Color';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import CustomizedDividersSource from '!raw-loader!./Customization';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ToggleButtonNotEmptySource from '!raw-loader!./EnforceValueSet';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ExclusiveSelectionSource from '!raw-loader!./ExclusiveSelection';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ToggleButtonsMultipleSource from '!raw-loader!./MultipleSelection';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import StandaloneToggleButtonSource from '!raw-loader!./StandaloneToggleButton';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ToggleButtonSizesSource from '!raw-loader!./ToggleButtonSizes';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import VerticalToggleButtonsSource from '!raw-loader!./VerticalButtons';

import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import ColorToggleButton from './Color';
import CustomizedDividers from './Customization';
import ToggleButtonNotEmpty from './EnforceValueSet';
import ExclusiveSelection from './ExclusiveSelection';
import ToggleButtonsMultiple from './MultipleSelection';
import StandaloneToggleButton from './StandaloneToggleButton';
import ToggleButtonSizes from './ToggleButtonSizes';
import VerticalToggleButtons from './VerticalButtons';

const ToggleButtons = () => {
  return (
    <>
      <AppComponentHeader
        title='Toggle Buttons'
        description='Toggle buttons can be used to group related options.'
        refUrl='https://mui.com/components/toggle-button/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Exclusive selection'
            component={ExclusiveSelection}
            source={ExclusiveSelectionSource}
            noScrollbar
            description='With exclusive selection, selecting one option deselects any other.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Multiple selection'
            component={ToggleButtonsMultiple}
            source={ToggleButtonsMultipleSource}
            noScrollbar
            description='Multiple selection allows for logically-grouped options, like bold, italic, and underline, to have multiple options selected.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Color'
            component={ColorToggleButton}
            source={ColorToggleButtonSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Standalone toggle button'
            component={StandaloneToggleButton}
            source={StandaloneToggleButtonSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Enforce value sets'
            component={ToggleButtonNotEmpty}
            source={ToggleButtonNotEmptySource}
            noScrollbar
            description='If you want to enforce that at least one button must be active, you can adapt your handleChange function.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Customization'
            component={CustomizedDividers}
            source={CustomizedDividersSource}
            noScrollbar
            description='Here is an example of customizing the component. You can learn more about this in the overrides documentation page.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Vertical buttons'
            component={VerticalToggleButtons}
            source={VerticalToggleButtonsSource}
            noScrollbar
            description='The buttons can be stacked vertically with the orientation prop set to "vertical".'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='ToggleButtonSizes'
            component={ToggleButtonSizes}
            source={ToggleButtonSizesSource}
            noScrollbar
            description='For larger or smaller buttons, use the size prop.'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default ToggleButtons;
