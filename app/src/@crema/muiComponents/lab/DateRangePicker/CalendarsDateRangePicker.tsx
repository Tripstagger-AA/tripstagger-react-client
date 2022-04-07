import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DateRangePicker, {DateRange} from '@mui/lab/DateRangePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export default function CalendarsDateRangePicker() {
  const [value, setValue] = React.useState<DateRange<Date>>([null, null]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div>
        <Typography sx={{mt: 2, mb: 1}}>1 calendar </Typography>
        <DateRangePicker
          calendars={1}
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
        <Typography sx={{mt: 2, mb: 1}}>2 calendars</Typography>
        <DateRangePicker
          calendars={2}
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
        <Typography sx={{mt: 2, mb: 1}}>3 calendars</Typography>
        <DateRangePicker
          calendars={3}
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
      </div>
    </LocalizationProvider>
  );
}
