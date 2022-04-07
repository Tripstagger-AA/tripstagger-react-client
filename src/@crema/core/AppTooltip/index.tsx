import {CremaTheme} from '@app/types';
import styled from '@emotion/styled';
import {lighten} from '@mui/material';
import Tooltip, {tooltipClasses, TooltipProps} from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import {useTheme} from '@mui/styles';
import React from 'react';

const LightTooltip = styled(({className, ...properties}: TooltipProps) => (
  <Tooltip {...properties} classes={{popper: className}} />
))(({theme}: {theme: CremaTheme}) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: lighten(theme.palette.background.default, 0.25),
    '&:before': {
      boxShadow: theme.shadows[1],
    },
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: lighten(theme.palette.background.default, 0.25),
    color: theme.palette.text.primary,
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

interface AppTooltipProperties {
  title: any;
  placement?:
    | 'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'right'
    | 'top-end'
    | 'top-start'
    | 'top';
  children: React.ReactElement<any, any>;
}

const AppTooltip: React.FC<AppTooltipProperties> = ({title, placement = 'top', children}) => {
  // @ts-ignore
  const {theme} = useTheme();
  return (
    <LightTooltip
      title={title}
      TransitionComponent={Zoom}
      placement={placement}
      arrow
      theme={theme}
    >
      {children}
    </LightTooltip>
  );
};
export default AppTooltip;
