import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import TextField from '@mui/material/TextField';
import isWeekend from 'date-fns/isWeekend';
import * as React from 'react';

export default function StaticDatePickerLandscape() {
  const [value, setValue] = React.useState<Date | null>(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDatePicker<Date>
        orientation='landscape'
        openTo='day'
        value={value}
        shouldDisableDate={isWeekend}
        onChange={newValue => {
          setValue(newValue);
        }}
        renderInput={parameters => <TextField {...parameters} />}
      />
    </LocalizationProvider>
  );
}
