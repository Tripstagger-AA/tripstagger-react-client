import Grid from '@mui/material/Grid';
import React from 'react';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import FallbackAvatarsSource from '!raw-loader!./Fallbacks';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import GroupAvatarsSource from '!raw-loader!./Grouped';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import IconAvatarsSource from '!raw-loader!./IconAvatars';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ImageAvatarsSource from '!raw-loader!./ImageAvatars';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import LetterAvatarsSource from '!raw-loader!./LetterAvatars';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import SizesImageAvatarsSource from '!raw-loader!./Sizes';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import VariantAvatarsSource from '!raw-loader!./Variants';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import BadgeAvatarsSource from '!raw-loader!./WithBadge';

import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import FallbackAvatars from './Fallbacks';
import GroupAvatars from './Grouped';
import IconAvatars from './IconAvatars';
import ImageAvatars from './ImageAvatars';
import LetterAvatars from './LetterAvatars';
import SizesImageAvatars from './Sizes';
import VariantAvatars from './Variants';
import BadgeAvatars from './WithBadge';

const Avatar = () => {
  return (
    <>
      <AppComponentHeader
        title='Avatar'
        description='Avatars are found throughout material design with uses in everything from tables to dialog menus.'
        refUrl='https://mui.com/components/avatars/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Image avatars'
            component={ImageAvatars}
            source={ImageAvatarsSource}
            noScrollbar
            description='Image avatars can be created by passing standard img props src or srcSet to the component.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Letter avatars'
            component={LetterAvatars}
            source={LetterAvatarsSource}
            noScrollbar
            description='Avatars containing simple characters can be created by passing a string as children.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Sizes'
            component={SizesImageAvatars}
            source={SizesImageAvatarsSource}
            noScrollbar
            description='You can change the size of the avatar with the height and width CSS properties.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Icon avatars'
            component={IconAvatars}
            source={IconAvatarsSource}
            noScrollbar
            description='Icon avatars are created by passing an icon as children.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Variants'
            component={VariantAvatars}
            source={VariantAvatarsSource}
            noScrollbar
            description='If you need square or rounded avatars, use the variant prop.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Fallbacks'
            component={FallbackAvatars}
            source={FallbackAvatarsSource}
            noScrollbar
            description='If there is an error loading the avatar image, the component falls back to an alternative in the following order:'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Grouped'
            component={GroupAvatars}
            source={GroupAvatarsSource}
            noScrollbar
            description='AvatarGroup renders its children as a stack.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='With badge'
            component={BadgeAvatars}
            source={BadgeAvatarsSource}
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Avatar;
