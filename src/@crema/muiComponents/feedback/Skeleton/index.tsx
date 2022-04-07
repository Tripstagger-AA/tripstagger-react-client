import Grid from '@mui/material/Grid';
import React from 'react';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import AnimationsSource from '!raw-loader!./Animations';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import FacebookSource from '!raw-loader!./Facebook';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import SkeletonChildrenSource from '!raw-loader!./SkeletonChildren';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import SkeletonColorSource from '!raw-loader!./SkeletonColor';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import SkeletonTypographySource from '!raw-loader!./SkeletonTypography';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import VariantsSource from '!raw-loader!./Variants';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import YouTubeSource from '!raw-loader!./YouTube';

import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import Animations from './Animations';
import Facebook from './Facebook';
import SkeletonChildren from './SkeletonChildren';
import SkeletonColor from './SkeletonColor';
import SkeletonTypography from './SkeletonTypography';
import Variants from './Variants';
import YouTube from './YouTube';

const Skeleton = () => {
  return (
    <>
      <AppComponentHeader
        title='Skeleton'
        description='Display a placeholder preview of your content before the data gets loaded to reduce load-time frustration'
        refUrl='https://mui.com/components/skeleton//'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Variants'
            component={Variants}
            source={VariantsSource}
            noScrollbar
            description='The component supports 3 shape variants.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Skeleton Color'
            component={SkeletonColor}
            source={SkeletonColorSource}
            noScrollbar
            description='The component supports 3 shape variants.'
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Animations'
            component={Animations}
            source={AnimationsSource}
            noScrollbar
            description='The component supports 3 shape variants.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Skeleton Typography'
            component={SkeletonTypography}
            source={SkeletonTypographySource}
            noScrollbar
            description='The component supports 3 shape variants.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='YouTube'
            component={YouTube}
            source={YouTubeSource}
            noScrollbar
            description='The component supports 3 shape variants.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Skeleton Children'
            component={SkeletonChildren}
            source={SkeletonChildrenSource}
            noScrollbar
            description='The component supports 3 shape variants.'
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Facebook'
            component={Facebook}
            source={FacebookSource}
            noScrollbar
            description='The component supports 3 shape variants.'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Skeleton;
