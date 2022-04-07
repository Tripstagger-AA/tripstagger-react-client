import Grid from '@mui/material/Grid';
import React from 'react';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import AsynchronousSource from '!raw-loader!./Asynchronous';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import CheckboxesTagsSource from '!raw-loader!./Checkboxes';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ComboBoxSource from '!raw-loader!./ComboBox';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ControlledStatesSource from '!raw-loader!./ControlledStates';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import CountrySelectSource from '!raw-loader!./CountrySelect';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import CustominputSource from '!raw-loader!./Custominput';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import CustomizedHookSource from '!raw-loader!./CustomizedHook';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import DisabledOptionsSource from '!raw-loader!./DisabledOptions';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import FixedTagsSource from '!raw-loader!./FixedTags';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import FreeSoloSource from '!raw-loader!./FreeSolo';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import FreeSoloCreateOptionSource from '!raw-loader!./FreeSoloCreateOption';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import GitHubLabelSource from '!raw-loader!./GitHubLabel';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import GoogleMapsplaceSource from '!raw-loader!./GoogleMapsplace';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import GroupedSource from '!raw-loader!./Grouped';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import HighlightsSource from '!raw-loader!./Highlights';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import LimitTagsSource from '!raw-loader!./LimitTags';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import MultipleSource from '!raw-loader!./Multiple';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import PlaygroundSource from '!raw-loader!./Playground';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ReturnsSource from '!raw-loader!./Returns';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import SizesSource from '!raw-loader!./Sizes';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import UseAutocompleteSource from '!raw-loader!./UseAutocomplete';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import VirtualizeSource from '!raw-loader!./Virtualize';

import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import Asynchronous from './Asynchronous';
import CheckboxesTags from './Checkboxes';
import ComboBox from './ComboBox';
import ControllableStates from './ControlledStates';
import CountrySelect from './CountrySelect';
import Custominput from './Custominput';
import CustomizedHook from './CustomizedHook';
import DisabledOptions from './DisabledOptions';
import FixedTags from './FixedTags';
import FreeSolo from './FreeSolo';
import FreeSoloCreateOption from './FreeSoloCreateOption';
import GitHubLabel from './GitHubLabel';
import GoogleMapsplace from './GoogleMapsplace';
import Grouped from './Grouped';
import Highlights from './Highlights';
import LimitTags from './LimitTags';
import Multiple from './Multiple';
import Playground from './Playground';
import Returns from './Returns';
import Sizes from './Sizes';
import UseAutocomplete from './UseAutocomplete';
import Virtualize from './Virtualize';

const AutoComplete = () => {
  return (
    <>
      <AppComponentHeader
        title='Autocomplete'
        description='The autocomplete is a normal text input enhanced by a panel of suggested options.'
        refUrl='https://mui.com/components/autocomplete/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Combo Box'
            component={ComboBox}
            source={ComboBoxSource}
            noScrollbar
            description='The value must be chosen from a predefined set of allowed values.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Country Select'
            component={CountrySelect}
            source={CountrySelectSource}
            description='Choose one of the 248 countries.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Controllable States'
            component={ControllableStates}
            source={ControlledStatesSource}
            description='The component has two states that can be controlled.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Grouped'
            component={Grouped}
            source={GroupedSource}
            description='You can group the options with the groupBy prop. If you do so, make sure that the options are also sorted with the same dimension that they are grouped by, otherwise you will notice duplicate headers.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Asynchronous'
            component={Asynchronous}
            source={AsynchronousSource}
            description='The component supports two different asynchronous use-cases'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='CheckboxesTags'
            component={CheckboxesTags}
            source={CheckboxesTagsSource}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Multiple'
            component={Multiple}
            source={MultipleSource}
            description='Also known as tags, the user is allowed to enter more than one value.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Sizes'
            component={Sizes}
            source={SizesSource}
            description='Fancy smaller inputs? Use the size prop.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Playground'
            component={Playground}
            source={PlaygroundSource}
            description='Each of the following examples demonstrates one feature of the Autocomplete component.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Free Solo'
            component={FreeSolo}
            source={FreeSoloSource}
            description='Set freeSolo to true so the textbox can contain any arbitrary value.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Free Solo Create Option'
            component={FreeSoloCreateOption}
            source={FreeSoloCreateOptionSource}
            description='If you intend to use this mode for a combo box like experience (an enhanced version of a select element) we recommend setting:'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Disabled Options'
            component={DisabledOptions}
            source={DisabledOptionsSource}
            description=''
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Use Auto complete'
            component={UseAutocomplete}
            source={UseAutocompleteSource}
            description='The useAutocomplete hook is also reexported from @mui/material for convenience and backward compatibility.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Customized Hook'
            component={CustomizedHook}
            source={CustomizedHookSource}
            description='Head to the customization section for an example with the Autocomplete component instead of the hook.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Fixed Tags'
            component={FixedTags}
            source={FixedTagsSource}
            description='In the event that you need to lock certain tag so that they cant be removed in the interface, you can set the chips disabled. '
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Limit Tags'
            component={LimitTags}
            source={LimitTagsSource}
            description='You can use the limitTags prop to limit the number of displayed options when not focused.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Git Hub Label'
            component={GitHubLabel}
            source={GitHubLabelSource}
            description='This demo reproduces the GitHubs label picker:
            '
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Highlights'
            component={Highlights}
            source={HighlightsSource}
            description='The following demo relies on autosuggest-highlight, a small (1 kB) utility for highlighting text in autosuggest and autocomplete components.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Virtualize'
            component={Virtualize}
            source={VirtualizeSource}
            description='Search within 10,000 randomly generated options. The list is virtualized thanks to react-window.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Google Maps place'
            component={GoogleMapsplace}
            source={GoogleMapsplaceSource}
            description='A customized UI for Google Maps Places Autocomplete.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Custom input'
            component={Custominput}
            source={CustominputSource}
            description='The renderInput prop allows you to customize the rendered input. The first argument of this render prop contains props that you need to forward. Pay specific attention to the ref and inputProps keys.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Returns'
            component={Returns}
            source={ReturnsSource}
            description='In the following demo, the options need to start with the query prefix:'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default AutoComplete;
