import Grid from '@mui/material/Grid';
import React from 'react';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import BasicPaginationSource from '!raw-loader!./BasicPagination';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import CustomIconsSource from '!raw-loader!./CustomIcons';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import PaginationButtonsSource from '!raw-loader!./PaginationButtons';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import PaginationControlledSource from '!raw-loader!./PaginationControlled';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import PaginationLinkSource from '!raw-loader!./PaginationLink';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import PaginationOutlinedSource from '!raw-loader!./PaginationOutlined';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import PaginationRangesSource from '!raw-loader!./PaginationRanges';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import PaginationRoundedSource from '!raw-loader!./PaginationRounded';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import PaginationSizeSource from '!raw-loader!./PaginationSize';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import TablePaginationDemoSource from '!raw-loader!./TablePaginationDemo';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import UsePaginationSource from '!raw-loader!./UsePagination';

import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import BasicPagination from './BasicPagination';
import CustomIcons from './CustomIcons';
import PaginationButtons from './PaginationButtons';
import PaginationControlled from './PaginationControlled';
import PaginationLink from './PaginationLink';
import PaginationOutlined from './PaginationOutlined';
import PaginationRanges from './PaginationRanges';
import PaginationRounded from './PaginationRounded';
import PaginationSize from './PaginationSize';
import TablePaginationDemo from './TablePaginationDemo';
import UsePagination from './UsePagination';

const Pagination = () => {
  return (
    <>
      <AppComponentHeader
        title='Pagination'
        description='The Pagination component enables the user to select a specific page from a range of pages.'
        refUrl='https://mui.com/components/pagination/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Basic pagination'
            component={BasicPagination}
            source={BasicPaginationSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='PaginationOutlined'
            component={PaginationOutlined}
            source={PaginationOutlinedSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Pagination Rounded'
            component={PaginationRounded}
            source={PaginationRoundedSource}
            noScrollbar
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Pagination Buttons'
            component={PaginationButtons}
            source={PaginationButtonsSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Custom Icons'
            component={CustomIcons}
            source={CustomIconsSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Pagination Link'
            component={PaginationLink}
            source={PaginationLinkSource}
            noScrollbar
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Pagination Controlled'
            component={PaginationControlled}
            source={PaginationControlledSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='TablePaginationDemo'
            component={TablePaginationDemo}
            source={TablePaginationDemoSource}
            noScrollbar
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Pagination Size'
            component={PaginationSize}
            source={PaginationSizeSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Pagination Ranges'
            component={PaginationRanges}
            source={PaginationRangesSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='UsePagination'
            component={UsePagination}
            source={UsePaginationSource}
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Pagination;
