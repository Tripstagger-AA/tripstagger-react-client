import Grid from '@mui/material/Grid';
import React from 'react';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import AccessibleBadgesSource from '!raw-loader!./Accessibility';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import BadgeOverlapSource from '!raw-loader!./BadgeOverlap';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import BadgeVisibilitySource from '!raw-loader!./BadgeVisibility';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import SimpleBadgeSource from '!raw-loader!./BasicBadge';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ColorBadgeSource from '!raw-loader!./Color';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import CustomizedBadgesSource from '!raw-loader!./Customization';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import DotBadgeSource from '!raw-loader!./DotBadge';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import BadgeMaxSource from '!raw-loader!./MaximumValue';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import UnstyledBadgeSource from '!raw-loader!./Unstyled';

import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import AccessibleBadges from './Accessibility';
import BadgeOverlap from './BadgeOverlap';
import BadgeVisibility from './BadgeVisibility';
import SimpleBadge from './BasicBadge';
import ColorBadge from './Color';
import CustomizedBadges from './Customization';
import DotBadge from './DotBadge';
import BadgeMax from './MaximumValue';
import UnstyledBadge from './Unstyled';

const Badges = () => {
  return (
    <>
      <AppComponentHeader
        title='Badge'
        description='Badge generates a small badge to the top-right of its child(ren).'
        refUrl='https://mui.com/components/badges/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Basic badge'
            component={SimpleBadge}
            source={SimpleBadgeSource}
            noScrollbar
            description='Examples of badges containing text, using primary and secondary colors. The badge is applied to its children.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Color'
            component={ColorBadge}
            source={ColorBadgeSource}
            noScrollbar
            description='Use color prop to apply theme palette to component.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Customization'
            component={CustomizedBadges}
            source={CustomizedBadgesSource}
            noScrollbar
            description='Here is an example of customizing the component. You can learn more about this in the overrides documentation page.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Badge visibility'
            component={BadgeVisibility}
            source={BadgeVisibilitySource}
            noScrollbar
            description='The visibility of badges can be controlled using the invisible prop.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Maximum value'
            component={BadgeMax}
            source={BadgeMaxSource}
            noScrollbar
            description='You can use the max prop to cap the value of the badge content.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Dot badge'
            component={DotBadge}
            source={DotBadgeSource}
            noScrollbar
            description='The dot prop changes a badge into a small dot. This can be used as a notification that something has changed without giving a count.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Badge overlap'
            component={BadgeOverlap}
            source={BadgeOverlapSource}
            noScrollbar
            description='You can use the overlap prop to place the badge relative to the corner of the wrapped element.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Unstyled'
            component={UnstyledBadge}
            source={UnstyledBadgeSource}
            noScrollbar
            description='The badge also comes with an unstyled version. It ideal for doing heavy customizations and minimizing bundle size.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Accessibility'
            component={AccessibleBadges}
            source={AccessibleBadgesSource}
            noScrollbar
            description='You can not rely on the content of the badge to be announced correctly. You should provide a full description, for instance, with aria-label:'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Badges;
