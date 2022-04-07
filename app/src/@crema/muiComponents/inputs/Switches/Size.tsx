import Switch from '@mui/material/Switch';
import * as React from 'react';

const label = {inputProps: {'aria-label': 'Switch demo'}};

export default function SwitchesSize() {
  return (
    <div>
      <Switch {...label} defaultChecked size='small' />
      <Switch {...label} defaultChecked />
    </div>
  );
}
