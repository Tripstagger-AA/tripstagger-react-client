import AdapterDateFns from '@mui/lab/AdapterDateFns';
import ClockPicker from '@mui/lab/ClockPicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import * as React from 'react';

export default function SubComponentsTimePickers() {
  const [date, setDate] = React.useState<Date | null>(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ClockPicker date={date} onChange={newDate => setDate(newDate)} />
    </LocalizationProvider>
  );
}
