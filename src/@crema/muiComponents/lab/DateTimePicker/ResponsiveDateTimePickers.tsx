import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DateTimePicker from '@mui/lab/DateTimePicker';
import DesktopDateTimePicker from '@mui/lab/DesktopDateTimePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDateTimePicker from '@mui/lab/MobileDateTimePicker';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import * as React from 'react';

export default function ResponsiveDateTimePickers() {
  const [value, setValue] = React.useState<Date | null>(new Date('2018-01-01T00:00:00.000Z'));

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        <MobileDateTimePicker
          value={value}
          onChange={newValue => {
            setValue(newValue);
          }}
          renderInput={parameters => <TextField {...parameters} />}
        />
        <DesktopDateTimePicker
          value={value}
          onChange={newValue => {
            setValue(newValue);
          }}
          renderInput={parameters => <TextField {...parameters} />}
        />
        <DateTimePicker
          renderInput={parameters => <TextField {...parameters} />}
          value={value}
          onChange={newValue => {
            setValue(newValue);
          }}
        />
      </Stack>
    </LocalizationProvider>
  );
}
