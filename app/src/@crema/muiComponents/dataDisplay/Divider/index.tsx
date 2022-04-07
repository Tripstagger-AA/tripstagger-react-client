import Grid from '@mui/material/Grid';
import React from 'react';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import DividerTextSource from '!raw-loader!./DividersText';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import InsetDividersSource from '!raw-loader!./InsetDividers';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ListDividersSource from '!raw-loader!./ListDividers';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import MiddleDividersSource from '!raw-loader!./MiddleDivider';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import SubheaderDividersSource from '!raw-loader!./SubheaderDividers';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import VerticalDividersSource from '!raw-loader!./VerticalDivider';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import VerticalWithTextSource from '!raw-loader!./VerticalWithText';

import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import DividerText from './DividersText';
import InsetDividers from './InsetDividers';
import ListDividers from './ListDividers';
import MiddleDividers from './MiddleDivider';
import SubheaderDividers from './SubheaderDividers';
import VerticalDividers from './VerticalDivider';
import VerticalWithText from './VerticalWithText';

const Divider = () => {
  return (
    <>
      <AppComponentHeader
        title='Divider'
        description='A divider is a thin line that groups content in lists and layouts.'
        refUrl='https://mui.com/components/dividers/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='List dividers'
            component={ListDividers}
            source={ListDividersSource}
            noScrollbar
            description='The divider renders as an <hr> by default. You can save rendering this DOM element by using the divider prop on the ListItem component.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Inset dividers'
            component={InsetDividers}
            source={InsetDividersSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Subheader dividers'
            component={SubheaderDividers}
            source={SubheaderDividersSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Middle divider'
            component={MiddleDividers}
            source={MiddleDividersSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Dividers with text'
            component={DividerText}
            source={DividerTextSource}
            noScrollbar
            description='You can also render a divider with content.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Vertical divider'
            component={VerticalDividers}
            source={VerticalDividersSource}
            noScrollbar
            description='You can also render a divider vertically using the orientation prop.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Vertical With Text'
            component={VerticalWithText}
            source={VerticalWithTextSource}
            noScrollbar
            description='You can also render a vertical divider with content.'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Divider;
