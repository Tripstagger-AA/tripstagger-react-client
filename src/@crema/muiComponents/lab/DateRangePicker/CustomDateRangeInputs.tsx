import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DateRangePicker, {DateRange} from '@mui/lab/DateRangePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';
import * as React from 'react';

export default function CustomDateRangeInputs() {
  const [value, setValue] = React.useState<DateRange<Date>>([null, null]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateRangePicker
        label='Advanced keyboard'
        value={value}
        onChange={newValue => setValue(newValue)}
        renderInput={(startProperties, endProperties) => (
          <React.Fragment>
            <input
              ref={startProperties.inputRef as React.Ref<HTMLInputElement>}
              {...startProperties.inputProps}
            />
            <Box sx={{mx: 1}}> to </Box>
            <input
              ref={endProperties.inputRef as React.Ref<HTMLInputElement>}
              {...endProperties.inputProps}
            />
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
  );
}
