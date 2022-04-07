import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DateTimePicker from '@mui/lab/DateTimePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TextField from '@mui/material/TextField';
import * as React from 'react';

export default function BasicDateTimePicker() {
  const [value, setValue] = React.useState<Date | null>(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        renderInput={properties => <TextField {...properties} />}
        label='DateTimePicker'
        value={value}
        onChange={newValue => {
          setValue(newValue);
        }}
      />
    </LocalizationProvider>
  );
}
