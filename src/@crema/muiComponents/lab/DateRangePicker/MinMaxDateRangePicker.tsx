import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DateRangePicker, {DateRange} from '@mui/lab/DateRangePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import addWeeks from 'date-fns/addWeeks';
import * as React from 'react';

function getWeeksAfter(date: Date | null, amount: number) {
  return date ? addWeeks(date, amount) : undefined;
}

export default function MinMaxDateRangePicker() {
  const [value, setValue] = React.useState<DateRange<Date>>([null, null]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateRangePicker
        disablePast
        value={value}
        maxDate={getWeeksAfter(value[0], 4)}
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
    </LocalizationProvider>
  );
}
