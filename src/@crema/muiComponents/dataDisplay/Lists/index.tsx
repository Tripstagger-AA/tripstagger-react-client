import Grid from '@mui/material/Grid';
import React from 'react';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import AlignItemsListSource from '!raw-loader!./AlignItemsList';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import BasicListSource from '!raw-loader!./BasicList';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import CheckboxListSource from '!raw-loader!./CheckboxList';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import CheckboxListSecondarySource from '!raw-loader!./CheckboxListSecondary';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import CustomizedListSource from '!raw-loader!./CustomizedList';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import FolderListSource from '!raw-loader!./FolderList';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import GutterlessListSource from '!raw-loader!./Gutterlesslist';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import InsetListSource from '!raw-loader!./InsetList';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import InteractiveListSource from '!raw-loader!./InteractiveList';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import NestedListSource from '!raw-loader!./NestedList';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import PinnedSubheaderListSource from '!raw-loader!./PinnedSubheaderList';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import SelectedListItemSource from '!raw-loader!./SelectedListItem';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import SwitchListSecondarySource from '!raw-loader!./SwitchListSecondary';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import VirtualizedListSource from '!raw-loader!./VirtualizedList';

import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import AlignItemsList from './AlignItemsList';
import BasicList from './BasicList';
import CheckboxList from './CheckboxList';
import CheckboxListSecondary from './CheckboxListSecondary';
import CustomizedList from './CustomizedList';
import FolderList from './FolderList';
import GutterlessList from './Gutterlesslist';
import InsetList from './InsetList';
import InteractiveList from './InteractiveList';
import NestedList from './NestedList';
import PinnedSubheaderList from './PinnedSubheaderList';
import SelectedListItem from './SelectedListItem';
import SwitchListSecondary from './SwitchListSecondary';
import VirtualizedList from './VirtualizedList';

const Lists = () => {
  return (
    <>
      <AppComponentHeader
        title='Lists'
        description='Lists are continuous, vertical indexes of text or images.'
        refUrl='https://mui.com/components/lists/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Basic Lists'
            component={BasicList}
            source={BasicListSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Nested List'
            component={NestedList}
            source={NestedListSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Folder List'
            component={FolderList}
            source={FolderListSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Selected ListItem'
            component={SelectedListItem}
            source={SelectedListItemSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Interactive List'
            component={InteractiveList}
            source={InteractiveListSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='AlignItems List'
            component={AlignItemsList}
            source={AlignItemsListSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Checkbox List'
            component={CheckboxList}
            source={CheckboxListSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Checkbox ListSecondary'
            component={CheckboxListSecondary}
            source={CheckboxListSecondarySource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Switch ListSecondary'
            component={SwitchListSecondary}
            source={SwitchListSecondarySource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Pinned Subheader List'
            component={PinnedSubheaderList}
            source={PinnedSubheaderListSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Customized List'
            component={CustomizedList}
            source={CustomizedListSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Inset List'
            component={InsetList}
            source={InsetListSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Gutter less List'
            component={GutterlessList}
            source={GutterlessListSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Virtualized List'
            component={VirtualizedList}
            source={VirtualizedListSource}
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Lists;
