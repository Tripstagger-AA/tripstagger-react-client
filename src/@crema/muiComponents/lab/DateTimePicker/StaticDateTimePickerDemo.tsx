import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDateTimePicker from '@mui/lab/StaticDateTimePicker';
import TextField from '@mui/material/TextField';
import * as React from 'react';

export default function StaticDateTimePickerDemo() {
  const [value, setValue] = React.useState<Date | null>(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDateTimePicker
        displayStaticWrapperAs='desktop'
        openTo='year'
        value={value}
        onChange={newValue => {
          setValue(newValue);
        }}
        renderInput={parameters => <TextField {...parameters} />}
      />
    </LocalizationProvider>
  );
}
