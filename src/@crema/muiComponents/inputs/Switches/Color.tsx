import {pink} from '@mui/material/colors';
import {alpha, styled} from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import * as React from 'react';

const GreenSwitch = styled(Switch)(({theme}) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: pink[600],
    '&:hover': {
      backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: pink[600],
  },
}));

const label = {inputProps: {'aria-label': 'Switch demo'}};

export default function ColorSwitches() {
  return (
    <div>
      <Switch {...label} defaultChecked />
      <Switch {...label} defaultChecked color='secondary' />
      <Switch {...label} defaultChecked color='warning' />
      <Switch {...label} defaultChecked color='default' />
      <GreenSwitch {...label} defaultChecked />
    </div>
  );
}
