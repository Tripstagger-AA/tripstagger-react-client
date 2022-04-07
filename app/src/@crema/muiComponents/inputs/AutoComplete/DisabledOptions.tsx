import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import * as React from 'react';

export default function DisabledOptions() {
  return (
    <Autocomplete
      id='disabled-options-demo'
      options={timeSlots}
      getOptionDisabled={option => option === timeSlots[0] || option === timeSlots[2]}
      sx={{width: 300}}
      renderInput={parameters => <TextField {...parameters} label='Disabled options' />}
    />
  );
}

// One time slot every 30 minutes.
const timeSlots = [...Array.from({length: 24 * 2})].map(
  (_, index) => `${index < 20 ? '0' : ''}${Math.floor(index / 2)}:${index % 2 === 0 ? '00' : '30'}`,
);