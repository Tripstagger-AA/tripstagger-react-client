import Grid from '@mui/material/Grid';
import React from 'react';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import AccessibleTabs1Source from '!raw-loader!./AccessibleTabs1';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import AccessibleTabs2Source from '!raw-loader!./AccessibleTabs2';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import BasicTabsSource from '!raw-loader!./BasicTabs';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import CenteredTabsSource from '!raw-loader!./CenteredTabs';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ColorTabsSource from '!raw-loader!./ColorTabs';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import CustomizedTabsSource from '!raw-loader!./CustomizedTabs';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import DisabledTabsSource from '!raw-loader!./DisabledTabs';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import FullWidthTabsSource from '!raw-loader!./FullWidthTabs';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import IconLabelTabsSource from '!raw-loader!./IconLabelTabs';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import IconPositionSource from '!raw-loader!./IconPosition';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import IconTabsSource from '!raw-loader!./IconTabs';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import LabTabsSource from '!raw-loader!./LabTabs';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import NavTabsSource from '!raw-loader!./NavTabs';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ScrollableTabsButtonAutoSource from '!raw-loader!./ScrollableTabsButtonAuto';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ScrollableTabsButtonForceSource from '!raw-loader!./ScrollableTabsButtonForce';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ScrollableTabsButtonVisibleSource from '!raw-loader!./ScrollableTabsButtonVisible';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import TabsWrappedLabelSource from '!raw-loader!./TabsWrappedLabel';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import UnstyledTabsBasicSource from '!raw-loader!./UnstyledTabsBasic';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import UnstyledTabsCustomizedSource from '!raw-loader!./UnstyledTabsCustomized';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import VerticalTabsSource from '!raw-loader!./VerticalTabs';

import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import AccessibleTabs1 from './AccessibleTabs1';
import AccessibleTabs2 from './AccessibleTabs2';
import BasicTabs from './BasicTabs';
import CenteredTabs from './CenteredTabs';
import ColorTabs from './ColorTabs';
import CustomizedTabs from './CustomizedTabs';
import DisabledTabs from './DisabledTabs';
import FullWidthTabs from './FullWidthTabs';
import IconLabelTabs from './IconLabelTabs';
import IconPosition from './IconPosition';
import IconTabs from './IconTabs';
import LabTabs from './LabTabs';
import NavTabs from './NavTabs';
import ScrollableTabsButtonAuto from './ScrollableTabsButtonAuto';
import ScrollableTabsButtonForce from './ScrollableTabsButtonForce';
import ScrollableTabsButtonVisible from './ScrollableTabsButtonVisible';
import TabsWrappedLabel from './TabsWrappedLabel';
import UnstyledTabsBasic from './UnstyledTabsBasic';
import UnstyledTabsCustomized from './UnstyledTabsCustomized';
import VerticalTabs from './VerticalTabs';

const Tabs = () => {
  return (
    <>
      <AppComponentHeader
        title='Tabs'
        description='Tabs make it easy to explore and switch between different views.'
        refUrl='https://mui.com/components/tabs/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Basic tabs'
            component={BasicTabs}
            source={BasicTabsSource}
            noScrollbar
            description='A basic example with tab panels.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Lab Tabs'
            component={LabTabs}
            source={LabTabsSource}
            noScrollbar
            description='A basic example with tab panels.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Tabs Wrapped Label'
            component={TabsWrappedLabel}
            source={TabsWrappedLabelSource}
            noScrollbar
            description='A basic example with tab panels.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Color Tabs'
            component={ColorTabs}
            source={ColorTabsSource}
            noScrollbar
            description='A basic example with tab panels.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Unstyled Tabs Customized'
            component={UnstyledTabsCustomized}
            source={UnstyledTabsCustomizedSource}
            noScrollbar
            description='A basic example with tab panels.'
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Full Width Tabs'
            component={FullWidthTabs}
            source={FullWidthTabsSource}
            noScrollbar
            description='A basic example with tab panels.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Disabled Tabs'
            component={DisabledTabs}
            source={DisabledTabsSource}
            noScrollbar
            description='A basic example with tab panels.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Centered Tabs'
            component={CenteredTabs}
            source={CenteredTabsSource}
            noScrollbar
            description='A basic example with tab panels.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Scrollable Tabs Button Auto'
            component={ScrollableTabsButtonAuto}
            source={ScrollableTabsButtonAutoSource}
            noScrollbar
            description='A basic example with tab panels.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Scrollable Tabs Button Force'
            component={ScrollableTabsButtonForce}
            source={ScrollableTabsButtonForceSource}
            noScrollbar
            description='A basic example with tab panels.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Scrollable Tabs Button Visible'
            component={ScrollableTabsButtonVisible}
            source={ScrollableTabsButtonVisibleSource}
            noScrollbar
            description='A basic example with tab panels.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Nav Tabs'
            component={NavTabs}
            source={NavTabsSource}
            noScrollbar
            description='A basic example with tab panels.'
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Icon Position'
            component={IconPosition}
            source={IconPositionSource}
            noScrollbar
            description='A basic example with tab panels.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Icon Label Tabs'
            component={IconLabelTabs}
            source={IconLabelTabsSource}
            noScrollbar
            description='A basic example with tab panels.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Icon Tabs'
            component={IconTabs}
            source={IconTabsSource}
            noScrollbar
            description='A basic example with tab panels.'
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Accessible Tabs1'
            component={AccessibleTabs1}
            source={AccessibleTabs1Source}
            noScrollbar
            description='A basic example with tab panels.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Accessible Tabs2'
            component={AccessibleTabs2}
            source={AccessibleTabs2Source}
            noScrollbar
            description='A basic example with tab panels.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Unstyled Tabs Basic'
            component={UnstyledTabsBasic}
            source={UnstyledTabsBasicSource}
            noScrollbar
            description='A basic example with tab panels.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Customized Tabs'
            component={CustomizedTabs}
            source={CustomizedTabsSource}
            noScrollbar
            description='A basic example with tab panels.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Vertical Tabs'
            component={VerticalTabs}
            source={VerticalTabsSource}
            noScrollbar
            description='A basic example with tab panels.'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Tabs;
