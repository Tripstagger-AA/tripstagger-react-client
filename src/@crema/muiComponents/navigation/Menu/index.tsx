import Grid from '@mui/material/Grid';
import React from 'react';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import AccountMenuSource from '!raw-loader!./AccountMenu';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import BasicMenuSource from '!raw-loader!./BasicMenu';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ContextMenuSource from '!raw-loader!./ContextMenu';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import CustomizedMenusSource from '!raw-loader!./CustomizedMenus';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import DenseMenuSource from '!raw-loader!./DenseMenu';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import FadeMenuSource from '!raw-loader!./FadeMenu';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import IconMenuSource from '!raw-loader!./IconMenu';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import LongMenuSource from '!raw-loader!./LongMenu';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import MenuListCompositionSource from '!raw-loader!./MenuListComposition';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import PositionedMenuSource from '!raw-loader!./PositionedMenu';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import SimpleListMenuSource from '!raw-loader!./SimpleListMenu';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import TypographyMenuSource from '!raw-loader!./TypographyMenu';

import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import AccountMenu from './AccountMenu';
import BasicMenu from './BasicMenu';
import ContextMenu from './ContextMenu';
import CustomizedMenus from './CustomizedMenus';
import DenseMenu from './DenseMenu';
import FadeMenu from './FadeMenu';
import IconMenu from './IconMenu';
import LongMenu from './LongMenu';
import MenuListComposition from './MenuListComposition';
import PositionedMenu from './PositionedMenu';
import SimpleListMenu from './SimpleListMenu';
import TypographyMenu from './TypographyMenu';

const Menu = () => {
  return (
    <>
      <AppComponentHeader
        title='Menu'
        description='Menus display a list of choices on temporary surfaces.'
        refUrl='https://mui.com/components/menus/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Basic menu'
            component={BasicMenu}
            source={BasicMenuSource}
            noScrollbar
            description='A basic menu opens over the anchor element by default (this option can be changed via props).'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Positioned Menu'
            component={PositionedMenu}
            source={PositionedMenuSource}
            noScrollbar
            description='A basic menu opens over the anchor element by default (this option can be changed via props).'
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Context Menu'
            component={ContextMenu}
            source={ContextMenuSource}
            noScrollbar
            description='A basic menu opens over the anchor element by default (this option can be changed via props).'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Icon Menu'
            component={IconMenu}
            source={IconMenuSource}
            noScrollbar
            description='A basic menu opens over the anchor element by default (this option can be changed via props).'
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Menu List Composition'
            component={MenuListComposition}
            source={MenuListCompositionSource}
            noScrollbar
            description='A basic menu opens over the anchor element by default (this option can be changed via props).'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='SimpleList Menu'
            component={SimpleListMenu}
            source={SimpleListMenuSource}
            noScrollbar
            description='A basic menu opens over the anchor element by default (this option can be changed via props).'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Account Menu'
            component={AccountMenu}
            source={AccountMenuSource}
            noScrollbar
            description='A basic menu opens over the anchor element by default (this option can be changed via props).'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Customized Menus'
            component={CustomizedMenus}
            source={CustomizedMenusSource}
            noScrollbar
            description='A basic menu opens over the anchor element by default (this option can be changed via props).'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Long Menu'
            component={LongMenu}
            source={LongMenuSource}
            noScrollbar
            description='A basic menu opens over the anchor element by default (this option can be changed via props).'
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Fade Menu'
            component={FadeMenu}
            source={FadeMenuSource}
            noScrollbar
            description='A basic menu opens over the anchor element by default (this option can be changed via props).'
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Dense Menu'
            component={DenseMenu}
            source={DenseMenuSource}
            noScrollbar
            description='A basic menu opens over the anchor element by default (this option can be changed via props).'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Typography Menu'
            component={TypographyMenu}
            source={TypographyMenuSource}
            noScrollbar
            description='A basic menu opens over the anchor element by default (this option can be changed via props).'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Menu;
