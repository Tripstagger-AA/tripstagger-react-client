import Grid from '@mui/material/Grid';
import React from 'react';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ActiveLastBreadcrumbSource from '!raw-loader!./ActiveLastBreadcrumb';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import BasicBreadcrumbsSource from '!raw-loader!./BasicBreadcrumbs';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import BreadcrumbsWithIconsSource from '!raw-loader!./BreadcrumbsWithIcons';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import CollapsedBreadcrumbsSource from '!raw-loader!./CollapsedBreadcrumbs';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import CustomizedBreadcrumbsSource from '!raw-loader!./CustomizedBreadcrumbs';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import CustomSeparatorSource from '!raw-loader!./CustomSeparator';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import IntegrationWithReactRouterSource from '!raw-loader!./IntegrationWithReactRouter';

import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import ActiveLastBreadcrumb from './ActiveLastBreadcrumb';
import BasicBreadcrumbs from './BasicBreadcrumbs';
import BreadcrumbsWithIcons from './BreadcrumbsWithIcons';
import CollapsedBreadcrumbs from './CollapsedBreadcrumbs';
import CustomizedBreadcrumbs from './CustomizedBreadcrumbs';
import CustomSeparator from './CustomSeparator';
import IntegrationWithReactRouter from './IntegrationWithReactRouter';

const BottomNavigation = () => {
  return (
    <>
      <AppComponentHeader
        title='Breadcrumbs'
        description='Breadcrumbs allow users to make selections from a range of values.'
        refUrl='https://mui.com/components/breadcrumbs/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Bottom Navigation'
            component={BasicBreadcrumbs}
            source={BasicBreadcrumbsSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='ActiveLast Breadcrumb'
            component={ActiveLastBreadcrumb}
            source={ActiveLastBreadcrumbSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Customized Breadcrumbs'
            component={CustomizedBreadcrumbs}
            source={CustomizedBreadcrumbsSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Collapsed Breadcrumbs'
            component={CollapsedBreadcrumbs}
            source={CollapsedBreadcrumbsSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Custom Separator'
            component={CustomSeparator}
            source={CustomSeparatorSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Breadcrumbs with icons'
            component={BreadcrumbsWithIcons}
            source={BreadcrumbsWithIconsSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Integration With React Router'
            component={IntegrationWithReactRouter}
            source={IntegrationWithReactRouterSource}
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default BottomNavigation;
