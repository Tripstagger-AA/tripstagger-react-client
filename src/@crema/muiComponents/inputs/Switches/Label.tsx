import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Switch from '@mui/material/Switch';
import * as React from 'react';

export default function SwitchLabels() {
  return (
    <FormGroup>
      <FormControlLabel control={<Switch defaultChecked />} label='Label' />
      <FormControlLabel disabled control={<Switch />} label='Disabled' />
    </FormGroup>
  );
}
