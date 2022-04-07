import Autocomplete from '@mui/material/Autocomplete';
import * as React from 'react';

const options = ['Option 1', 'Option 2'];

export default function CustomInputAutocomplete() {
  return (
    <label>
      Value:{' '}
      <Autocomplete
        sx={{
          display: 'inline-block',
          '& input': {
            width: 200,
            bgcolor: 'background.paper',
            color: theme => theme.palette.getContrastText(theme.palette.background.paper),
          },
        }}
        id='custom-input-demo'
        options={options}
        renderInput={parameters => (
          <div ref={parameters.InputProps.ref}>
            <input type='text' {...parameters.inputProps} />
          </div>
        )}
      />
    </label>
  );
}
