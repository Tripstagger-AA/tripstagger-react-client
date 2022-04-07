import Grid from '@mui/material/Grid';
import React from 'react';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import BasicButtonGroupSource from '!raw-loader!./BasicButtonGroup';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import DisableElevationSource from '!raw-loader!./DisableElevation';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import GroupSizesColorsSource from '!raw-loader!./GroupSizesColors';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import SplitButtonSource from '!raw-loader!./SplitButton';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import VariantButtonGroupSource from '!raw-loader!./VariantButtonGroup';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import GroupOrientationSource from '!raw-loader!./VerticalGroup';

import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import BasicButtonGroup from './BasicButtonGroup';
import DisableElevation from './DisableElevation';
import GroupSizesColors from './GroupSizesColors';
import SplitButton from './SplitButton';
import VariantButtonGroup from './VariantButtonGroup';
import GroupOrientation from './VerticalGroup';

const ButtonGroup = () => {
  return (
    <>
      <AppComponentHeader
        title='Button Group'
        description='The ButtonGroup component can be used to group related buttons.'
        refUrl='https://mui.com/components/button-group/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Basic button group'
            component={BasicButtonGroup}
            source={BasicButtonGroupSource}
            noScrollbar
            description='The buttons can be grouped by wrapping them with the ButtonGroup component. They need to be immediate children.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Variant Button Group'
            component={VariantButtonGroup}
            source={VariantButtonGroupSource}
            noScrollbar
            description='All the standard button variants are supported.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Group Sizes Colors'
            component={GroupSizesColors}
            source={GroupSizesColorsSource}
            noScrollbar
            description='The size and color props can be used to control the appearance of the button group.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Vertical group'
            component={GroupOrientation}
            source={GroupOrientationSource}
            noScrollbar
            description='The button group can be displayed vertically using the orientation prop.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Split Button'
            component={SplitButton}
            source={SplitButtonSource}
            noScrollbar
            description='ButtonGroup can also be used to create a split button. The dropdown can change the button action (as in this example) or be used to immediately trigger a related action.'
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
      </AppGridContainer>
    </>
  );
};

export default ButtonGroup;
