import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DesktopTimePicker from '@mui/lab/DesktopTimePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileTimePicker from '@mui/lab/MobileTimePicker';
import TimePicker from '@mui/lab/TimePicker';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import * as React from 'react';

export default function ResponsiveTimePickers() {
  const [value, setValue] = React.useState<Date | null>(new Date('2018-01-01T00:00:00.000Z'));

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        <MobileTimePicker
          label='For mobile'
          value={value}
          onChange={newValue => {
            setValue(newValue);
          }}
          renderInput={parameters => <TextField {...parameters} />}
        />
        <DesktopTimePicker
          label='For desktop'
          value={value}
          onChange={newValue => {
            setValue(newValue);
          }}
          renderInput={parameters => <TextField {...parameters} />}
        />
        <TimePicker
          value={value}
          onChange={setValue}
          renderInput={parameters => <TextField {...parameters} />}
        />
      </Stack>
    </LocalizationProvider>
  );
}
