import Grid from '@mui/material/Grid';
import React from 'react';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import AutoGridSource from '!raw-loader!./AutoGrid';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import AutoGridNoWrapSource from '!raw-loader!./AutoGridNoWrap';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import BasicGridSource from '!raw-loader!./BasicGrid';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ColumnsGridSource from '!raw-loader!./ColumnsGrid';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ComplexGridSource from '!raw-loader!./ComplexGrid';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import CSSGridSource from '!raw-loader!./CSSGrid';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import FormRowSource from '!raw-loader!./FormRow';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import FullWidthGridSource from '!raw-loader!./FullWidthGrid';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ResponsiveGridSource from '!raw-loader!./ResponsiveGrid';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import RowAndColumnSpacingSource from '!raw-loader!./RowAndColumnSpacing';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import SpacingGridSource from '!raw-loader!./SpacingGrid';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import VariableWidthGridSource from '!raw-loader!./VariableWidthGrid';

import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import AutoGrid from './AutoGrid';
import AutoGridNoWrap from './AutoGridNoWrap';
import BasicGrid from './BasicGrid';
import ColumnsGrid from './ColumnsGrid';
import ComplexGrid from './ComplexGrid';
import CSSGrid from './CSSGrid';
import FormRow from './FormRow';
import FullWidthGrid from './FullWidthGrid';
import ResponsiveGrid from './ResponsiveGrid';
import RowAndColumnSpacing from './RowAndColumnSpacing';
import SpacingGrid from './SpacingGrid';
import VariableWidthGrid from './VariableWidthGrid';

const GridLayout = () => {
  return (
    <>
      <AppComponentHeader
        title='Grid'
        description='The Material Design responsive layout grid adapts to screen size and orientation, ensuring consistency across layouts.'
        refUrl='https://mui.com/components/grid/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='BasicGrid'
            component={BasicGrid}
            source={BasicGridSource}
            description='All system properties are available via the sx prop. In addition, the sx prop allows you to specify any other CSS rules you may need. Heres an example of how you can use it:'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='FullWidthGrid'
            component={FullWidthGrid}
            source={FullWidthGridSource}
            description='All system properties are available via the sx prop. In addition, the sx prop allows you to specify any other CSS rules you may need. Heres an example of how you can use it:'
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Row And Column Spacing'
            component={RowAndColumnSpacing}
            source={RowAndColumnSpacingSource}
            description='The rowSpacing and columnSpacing props allow for specifying the row and column gaps independently. Its similar to the row-gap and column-gap properties of CSS Grid.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Responsive Grid'
            component={ResponsiveGrid}
            source={ResponsiveGridSource}
            description='The rowSpacing and columnSpacing props allow for specifying the row and column gaps independently. Its similar to the row-gap and column-gap properties of CSS Grid.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Auto Grid'
            component={AutoGrid}
            source={AutoGridSource}
            description='The rowSpacing and columnSpacing props allow for specifying the row and column gaps independently. Its similar to the row-gap and column-gap properties of CSS Grid.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Variable Width Grid '
            component={VariableWidthGrid}
            source={VariableWidthGridSource}
            noScrollbar
            description='The rowSpacing and columnSpacing props allow for specifying the row and column gaps independently. Its similar to the row-gap and column-gap properties of CSS Grid.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Complex Grid '
            component={ComplexGrid}
            source={ComplexGridSource}
            noScrollbar
            description='The rowSpacing and columnSpacing props allow for specifying the row and column gaps independently. Its similar to the row-gap and column-gap properties of CSS Grid.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='FormRow '
            component={FormRow}
            source={FormRowSource}
            noScrollbar
            description='The rowSpacing and columnSpacing props allow for specifying the row and column gaps independently. Its similar to the row-gap and column-gap properties of CSS Grid.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='ColumnsGrid '
            component={ColumnsGrid}
            source={ColumnsGridSource}
            noScrollbar
            description='The rowSpacing and columnSpacing props allow for specifying the row and column gaps independently. Its similar to the row-gap and column-gap properties of CSS Grid.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='CSSGrid '
            component={CSSGrid}
            source={CSSGridSource}
            noScrollbar
            description='The rowSpacing and columnSpacing props allow for specifying the row and column gaps independently. Its similar to the row-gap and column-gap properties of CSS Grid.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Auto Grid No Wrap '
            component={AutoGridNoWrap}
            source={AutoGridNoWrapSource}
            noScrollbar
            description='The rowSpacing and columnSpacing props allow for specifying the row and column gaps independently. Its similar to the row-gap and column-gap properties of CSS Grid.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Spacing Grid'
            component={SpacingGrid}
            source={SpacingGridSource}
            description='All system properties are available via the sx prop. In addition, the sx prop allows you to specify any other CSS rules you may need. Heres an example of how you can use it:'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default GridLayout;
