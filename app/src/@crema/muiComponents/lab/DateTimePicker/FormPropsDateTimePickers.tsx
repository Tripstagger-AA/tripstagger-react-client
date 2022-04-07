import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DateTimePicker from '@mui/lab/DateTimePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import * as React from 'react';

export default function FormPropertiesDateTimePickers() {
  const [value, setValue] = React.useState<Date | null>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        <DateTimePicker
          label='disabled'
          disabled
          value={value}
          onChange={newValue => {
            setValue(newValue);
          }}
          renderInput={parameters => <TextField {...parameters} />}
        />
        <DateTimePicker
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
