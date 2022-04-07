import Checkbox from '@mui/material/Checkbox';
import * as React from 'react';

const label = {inputProps: {'aria-label': 'Checkbox demo'}};

export default function BasicCheckboxes() {
  return (
    <div>
      <Checkbox {...label} defaultChecked />
      <Checkbox {...label} />
      <Checkbox {...label} disabled />
      <Checkbox {...label} disabled checked />
    </div>
  );
}