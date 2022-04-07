import Grid from '@mui/material/Grid';
import React from 'react';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import SelectAutoWidthSource from '!raw-loader!./AutoWidth';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import BasicSelectSource from '!raw-loader!./BasicSelect';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ControlledOpenSelectSource from '!raw-loader!./ControlledOpenSelect';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import CustomizedSelectsSource from '!raw-loader!./Customization';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import DialogSelectSource from '!raw-loader!./DialogSelect';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import GroupedSelectSource from '!raw-loader!./GroupedSelect';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import SelectLabelsSource from '!raw-loader!./LabelsHelperText';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import MultipleSelectSource from '!raw-loader!./MultipleSelect';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import MultipleSelectCheckmarksSource from '!raw-loader!./MultipleSelectCheckmarks';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import MultipleSelectChipSource from '!raw-loader!./MultipleSelectChip';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import MultipleSelectNativeSource from '!raw-loader!./MultipleSelectNative';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import MultipleSelectPlaceholderSource from '!raw-loader!./MultipleSelectPlaceholder';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import NativeSelectDemoSource from '!raw-loader!./NativeSelect';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import SelectOtherPropsSource from '!raw-loader!./SelectOtherProps';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import SelectVariantsSource from '!raw-loader!./SelectVariants';

import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import SelectAutoWidth from './AutoWidth';
import BasicSelect from './BasicSelect';
import ControlledOpenSelect from './ControlledOpenSelect';
import CustomizedSelects from './Customization';
import DialogSelect from './DialogSelect';
import GroupedSelect from './GroupedSelect';
import SelectLabels from './LabelsHelperText';
import MultipleSelect from './MultipleSelect';
import MultipleSelectCheckmarks from './MultipleSelectCheckmarks';
import MultipleSelectChip from './MultipleSelectChip';
import MultipleSelectNative from './MultipleSelectNative';
import MultipleSelectPlaceholder from './MultipleSelectPlaceholder';
import NativeSelectDemo from './NativeSelect';
import SelectOtherProperties from './SelectOtherProps';
import SelectVariants from './SelectVariants';

const Selects = () => {
  return (
    <>
      <AppComponentHeader
        title='Select'
        description='Select components are used for collecting user provided information from a list of options.'
        refUrl='https://mui.com/components/selects/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Basic select'
            component={BasicSelect}
            source={BasicSelectSource}
            noScrollbar
            description='Menus are positioned under their emitting elements, unless they are close to the bottom of the viewport.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Labels and helper text'
            component={SelectLabels}
            source={SelectLabelsSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Filled and standard variants'
            component={SelectVariants}
            source={SelectVariantsSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Auto width'
            component={SelectAutoWidth}
            source={SelectAutoWidthSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Other props'
            component={SelectOtherProperties}
            source={SelectOtherPropsSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Customization'
            component={CustomizedSelects}
            source={CustomizedSelectsSource}
            noScrollbar
            description='Here are some examples of customizing the component. You can learn more about this in the overrides documentation page.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Native select'
            component={NativeSelectDemo}
            source={NativeSelectDemoSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Multiple Select'
            component={MultipleSelect}
            source={MultipleSelectSource}
            noScrollbar
            description='The Select component can handle multiple selections. It enabled with the multiple prop.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Dialog Select'
            component={DialogSelect}
            source={DialogSelectSource}
            noScrollbar
            description='While it discouraged by the Material Design guidelines, you can use a select inside a dialog.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Multiple Select Checkmarks'
            component={MultipleSelectCheckmarks}
            source={MultipleSelectCheckmarksSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Multiple Select Chip'
            component={MultipleSelectChip}
            source={MultipleSelectChipSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Multiple Select Placeholder'
            component={MultipleSelectPlaceholder}
            source={MultipleSelectPlaceholderSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Multiple Select Native'
            component={MultipleSelectNative}
            source={MultipleSelectNativeSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Controlled Open Select'
            component={ControlledOpenSelect}
            source={ControlledOpenSelectSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Grouped Select'
            component={GroupedSelect}
            source={GroupedSelectSource}
            noScrollbar
            description='Display categories with the ListSubheader component or the native <optgroup> element.'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Selects;
