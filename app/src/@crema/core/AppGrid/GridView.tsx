import {Box, Theme, useTheme} from '@mui/material';
import {SxProps} from '@mui/system';
import React, {CSSProperties, ReactNode, useEffect, useState} from 'react';
import {useBottomScrollListener} from 'react-bottom-scroll-listener';

import {useWidth} from '../../utility/helper/Utils';
import AppAnimateGroup from '../AppAnimateGroup';

interface GridViewProperties {
  sx?: SxProps<Theme>;
  width?: string;
  responsive?: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  itemPadding?: number;
  renderRow: (item: any, index: number) => ReactNode;
  border?: boolean;
  column?: number;
  animation?: string;
  containerStyle?: CSSProperties;
  ListEmptyComponent?: ReactNode;
  ListFooterComponent?: ReactNode;
  data?: any[];
  onEndReached?: () => void;

  [x: string]: any;
}

const getEmptyContainer = (ListEmptyComponent: any) => {
  if (ListEmptyComponent)
    return React.isValidElement(ListEmptyComponent) ? ListEmptyComponent : <ListEmptyComponent />;
  return null;
};

const getFooterContainer = (ListFooterComponent: any) => {
  if (ListFooterComponent)
    return React.isValidElement(ListFooterComponent) ? (
      ListFooterComponent
    ) : (
      <ListFooterComponent />
    );
  return null;
};

const GridView: React.FC<GridViewProperties> = ({
  sx,
  column = 3,
  responsive,
  itemPadding = 12,
  animation = 'transition.expandIn',
  renderRow,
  onEndReached,
  data = [],
  containerStyle,
  border = false,
  ListFooterComponent,
  ListEmptyComponent,
}) => {
  const theme = useTheme();
  const width = useWidth();
  const borderStyle: CSSProperties = {
    border: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.background.paper,
    borderRadius: 4,
    overflow: 'hidden',
  };

  const [displayColumn, setColumn] = useState<number>(column);
  if (!onEndReached) {
    onEndReached = () => {};
  }

  useEffect(() => {
    setColumn(column);
  }, [column]);

  useEffect(() => {
    const getColumnCount = () => {
      if (responsive) {
        switch (width) {
          case 'xs': {
            return responsive.xs || column;
          }
          case 'sm': {
            return responsive.sm || responsive.xs || column;
          }
          case 'md': {
            return responsive.md || responsive.sm || responsive.xs || column;
          }
          case 'lg': {
            return responsive.lg || responsive.md || responsive.sm || responsive.xs || column;
          }
          case 'xl': {
            return (
              responsive.xl ||
              responsive.lg ||
              responsive.md ||
              responsive.sm ||
              responsive.xs ||
              column
            );
          }
          // No default
        }
      } else {
        return column;
      }
    };
    setColumn(getColumnCount() as number);
  }, [width, column, responsive]);

  let style = containerStyle;
  if (border) {
    style = {...style, ...borderStyle};
  }
  useBottomScrollListener(onEndReached, {debounce: 200});
  return (
    <Box
      sx={{
        width: '100%',
        ...sx,
      }}
    >
      <AppAnimateGroup
        enter={{
          animation,
        }}
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          margin: -itemPadding,
          ...style,
        }}
      >
        {data.length > 0 ? (
          data.map((item, index) => (
            <Box
              style={{
                flexGrow: 0,
                maxWidth: `${100 / displayColumn}%`,
                flexBasis: `${100 / displayColumn}%`,
                padding: itemPadding,
                boxSizing: 'border-box',
              }}
              key={'grid-' + index}
            >
              {renderRow(item, index)}
            </Box>
          ))
        ) : (
          <div />
        )}
      </AppAnimateGroup>
      {data.length === 0 ? getEmptyContainer(ListEmptyComponent) : null}
      {getFooterContainer(ListFooterComponent)}
    </Box>
  );
};

export default GridView;
