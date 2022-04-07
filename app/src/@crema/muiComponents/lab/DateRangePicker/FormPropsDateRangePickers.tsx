import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DateRangePicker, {DateRange} from '@mui/lab/DateRangePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import * as React from 'react';

export default function FormPropertiesDateRangePickers() {
  const [value, setValue] = React.useState<DateRange<Date>>([null, null]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        <DateRangePicker
          disabled
          startText='disabled start'
          endText='disabled end'
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
        <DateRangePicker
          readOnly
          startText='read-only start'
          endText='read-only end'
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
