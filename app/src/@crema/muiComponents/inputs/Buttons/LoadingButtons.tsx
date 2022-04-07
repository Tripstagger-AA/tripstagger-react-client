import SaveIcon from '@mui/icons-material/Save';
import LoadingButton from '@mui/lab/LoadingButton';
import Stack from '@mui/material/Stack';
import * as React from 'react';

export default function LoadingButtons() {
  return (
    <Stack direction='row' spacing={2}>
      <LoadingButton loading variant='outlined'>
        Submit
      </LoadingButton>
      <LoadingButton loading loadingIndicator='Loading...' variant='outlined'>
        Fetch data
      </LoadingButton>
      <LoadingButton loading loadingPosition='start' startIcon={<SaveIcon />} variant='outlined'>
        Save
      </LoadingButton>
    </Stack>
  );
}
