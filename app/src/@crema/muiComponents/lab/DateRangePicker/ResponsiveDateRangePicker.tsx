import AdapterDateFns from '@mui/lab/AdapterDateFns';
import {DateRange} from '@mui/lab/DateRangePicker';
import DesktopDateRangePicker from '@mui/lab/DesktopDateRangePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDateRangePicker from '@mui/lab/MobileDateRangePicker';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import * as React from 'react';

export default function ResponsiveDateRangePicker() {
  const [value, setValue] = React.useState<DateRange<Date>>([null, null]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        <MobileDateRangePicker
          startText='Mobile start'
          value={value}
          onChange={newValue => {
            setValue(newValue);
          }}
          renderInput={(startProperties, endProperties) => (
            <React.Fragment>
              <TextField {...startProperties} />
              <Box sx={{mx: 2}}> to </Box>
              <TextField {...endProperties} />
            </React.Fragment>
          )}
        />
        <DesktopDateRangePicker
          startText='Desktop start'
          value={value}
          onChange={newValue => {
            setValue(newValue);
          }}
          renderInput={(startProperties, endProperties) => (
            <React.Fragment>
              <TextField {...startProperties} />
              <Box sx={{mx: 2}}> to </Box>
              <TextField {...endProperties} />
            </React.Fragment>
          )}
        />
      </Stack>
    </LocalizationProvider>
  );
}
