import Grid from '@mui/material/Grid';
import React from 'react';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import AccessibilityTooltipsSource from '!raw-loader!./AccessibilityTooltips';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ArrowTooltipsSource from '!raw-loader!./Arrowtooltips';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import BasicTooltipSource from '!raw-loader!./BasicTooltip';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ControlledTooltipsSource from '!raw-loader!./ControlledTooltips';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import CustomizedTooltipsSource from '!raw-loader!./CustomizedTooltips';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import DelayTooltipsSource from '!raw-loader!./DelayTooltips';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import DisabledTooltipsSource from '!raw-loader!./DisabledTooltips';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import FollowCursorTooltipsSource from '!raw-loader!./FollowCursorTooltips';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import NotInteractiveTooltipsSource from '!raw-loader!./NotInteractiveTooltips';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import PositionedTooltipsSource from '!raw-loader!./PositionedTooltips';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import TransitionsTooltipsSource from '!raw-loader!./TransitionsTooltips';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import TriggersTooltipsSource from '!raw-loader!./TriggersTooltips';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import VariableWidthSource from '!raw-loader!./VariableWidth';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import VirtualelementSource from '!raw-loader!./Virtualelement';

import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import AccessibilityTooltips from './AccessibilityTooltips';
import ArrowTooltips from './Arrowtooltips';
import BasicTooltip from './BasicTooltip';
import ControlledTooltips from './ControlledTooltips';
import CustomizedTooltips from './CustomizedTooltips';
import DelayTooltips from './DelayTooltips';
import DisabledTooltips from './DisabledTooltips';
import FollowCursorTooltips from './FollowCursorTooltips';
import NotInteractiveTooltips from './NotInteractiveTooltips';
import PositionedTooltips from './PositionedTooltips';
import TransitionsTooltips from './TransitionsTooltips';
import TriggersTooltips from './TriggersTooltips';
import VariableWidth from './VariableWidth';
import Virtualelement from './Virtualelement';

const Tooltip = () => {
  return (
    <>
      <AppComponentHeader
        title='Tooltip'
        description='Tooltips display informative text when users hover over, focus on, or tap an element.'
        refUrl='https://mui.com/components/tooltips/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Basic Tooltip'
            component={BasicTooltip}
            source={BasicTooltipSource}
            noScrollbar
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Customized Tooltips'
            component={CustomizedTooltips}
            source={CustomizedTooltipsSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Arrow Tooltips'
            component={ArrowTooltips}
            source={ArrowTooltipsSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Triggers Tooltips'
            component={TriggersTooltips}
            source={TriggersTooltipsSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Controlled Tooltips'
            component={ControlledTooltips}
            source={ControlledTooltipsSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Variable Width'
            component={VariableWidth}
            source={VariableWidthSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Not Interactive Tooltips'
            component={NotInteractiveTooltips}
            source={NotInteractiveTooltipsSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Disabled Tooltips'
            component={DisabledTooltips}
            source={DisabledTooltipsSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Transitions Tooltips'
            component={TransitionsTooltips}
            source={TransitionsTooltipsSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='FollowCursor Tooltips'
            component={FollowCursorTooltips}
            source={FollowCursorTooltipsSource}
            noScrollbar
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Showing and hiding'
            component={DelayTooltips}
            source={DelayTooltipsSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Accessibility Tooltips'
            component={AccessibilityTooltips}
            source={AccessibilityTooltipsSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Positioned Tooltips'
            component={PositionedTooltips}
            source={PositionedTooltipsSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Virtual element'
            component={Virtualelement}
            source={VirtualelementSource}
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Tooltip;
