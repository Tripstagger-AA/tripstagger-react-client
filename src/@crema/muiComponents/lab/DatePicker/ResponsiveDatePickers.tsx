import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DatePicker from '@mui/lab/DatePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import * as React from 'react';

export default function ResponsiveDatePickers() {
  const [value, setValue] = React.useState<Date | null>(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        <MobileDatePicker
          label='For mobile'
          value={value}
          onChange={newValue => {
            setValue(newValue);
          }}
          renderInput={parameters => <TextField {...parameters} />}
        />
        <DesktopDatePicker
          label='For desktop'
          value={value}
          minDate={new Date('2017-01-01')}
          onChange={newValue => {
            setValue(newValue);
          }}
          renderInput={parameters => <TextField {...parameters} />}
        />
        <DatePicker
          disableFuture
          label='Responsive'
          openTo='year'
          views={['year', 'month', 'day']}
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
