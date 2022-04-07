import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import * as React from 'react';

export default function FormPropertiesTimePickers() {
  const [value, setValue] = React.useState<Date | null>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        <TimePicker
          label='disabled'
          disabled
          value={value}
          onChange={newValue => {
            setValue(newValue);
          }}
          renderInput={parameters => <TextField {...parameters} />}
        />
        <TimePicker
          label='read-only'
          readOnly
          value={value}
          onChange={newValue => {
            setValue(newValue);
          }}
          renderInput={parameters => <TextField {...parameters} />}
        />
      </Stack>
    </LocalizationProvider>
  );
}
