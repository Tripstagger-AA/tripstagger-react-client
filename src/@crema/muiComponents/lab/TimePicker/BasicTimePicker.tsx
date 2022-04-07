import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import TextField from '@mui/material/TextField';
import * as React from 'react';

export default function BasicTimePicker() {
  const [value, setValue] = React.useState<Date | null>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePicker
        label='Basic example'
        value={value}
        onChange={newValue => {
          setValue(newValue);
        }}
        renderInput={parameters => <TextField {...parameters} />}
      />
    </LocalizationProvider>
  );
}
