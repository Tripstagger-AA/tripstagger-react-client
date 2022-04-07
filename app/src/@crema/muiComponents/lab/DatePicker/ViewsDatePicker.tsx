import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import * as React from 'react';

export default function ViewsDatePicker() {
  const [value, setValue] = React.useState<Date | null>(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        <DatePicker
          views={['year']}
          label='Year only'
          value={value}
          onChange={newValue => {
            setValue(newValue);
          }}
          renderInput={parameters => <TextField {...parameters} helperText={null} />}
        />
        <DatePicker
          views={['year', 'month']}
          label='Year and Month'
          minDate={new Date('2012-03-01')}
          maxDate={new Date('2023-06-01')}
          value={value}
          onChange={newValue => {
            setValue(newValue);
          }}
          renderInput={parameters => <TextField {...parameters} helperText={null} />}
        />
        <DatePicker
          openTo='year'
          views={['year', 'month', 'day']}
          label='Year, month and date'
          value={value}
          onChange={newValue => {
            setValue(newValue);
          }}
          renderInput={parameters => <TextField {...parameters} helperText={null} />}
        />
        <DatePicker
          views={['day', 'month', 'year']}
          label='Invert the order of views'
          value={value}
          onChange={newValue => {
            setValue(newValue);
          }}
          renderInput={parameters => <TextField {...parameters} helperText={null} />}
        />
        <DatePicker
          views={['day']}
          label='Just date'
          value={value}
          onChange={newValue => {
            setValue(newValue);
          }}
          renderInput={parameters => <TextField {...parameters} helperText={null} />}
        />
      </Stack>
    </LocalizationProvider>
  );
}
