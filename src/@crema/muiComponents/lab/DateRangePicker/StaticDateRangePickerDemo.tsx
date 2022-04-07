import AdapterDateFns from '@mui/lab/AdapterDateFns';
import {DateRange} from '@mui/lab/DateRangePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDateRangePicker from '@mui/lab/StaticDateRangePicker';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import * as React from 'react';

export default function StaticDateRangePickerDemo() {
  const [value, setValue] = React.useState<DateRange<Date>>([null, null]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDateRangePicker
        displayStaticWrapperAs='desktop'
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
    </LocalizationProvider>
  );
}
