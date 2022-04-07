import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticTimePicker from '@mui/lab/StaticTimePicker';
import TextField from '@mui/material/TextField';
import * as React from 'react';

export default function StaticTimePickerDemo() {
  const [value, setValue] = React.useState<Date | null>(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticTimePicker
        displayStaticWrapperAs='mobile'
        value={value}
        onChange={newValue => {
          setValue(newValue);
        }}
        renderInput={parameters => <TextField {...parameters} />}
      />
    </LocalizationProvider>
  );
}
