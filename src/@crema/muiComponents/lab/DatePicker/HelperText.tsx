import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TextField from '@mui/material/TextField';
import * as React from 'react';

export default function HelperText() {
  const [value, setValue] = React.useState<Date | null>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label='Helper text example'
        value={value}
        onChange={newValue => {
          setValue(newValue);
        }}
        renderInput={parameters => (
          <TextField {...parameters} helperText={parameters?.inputProps?.placeholder} />
        )}
      />
    </LocalizationProvider>
  );
}
