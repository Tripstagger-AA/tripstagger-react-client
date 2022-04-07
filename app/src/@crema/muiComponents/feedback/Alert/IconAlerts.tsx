import CheckIcon from '@mui/icons-material/Check';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import * as React from 'react';

export default function IconAlerts() {
  return (
    <Stack sx={{width: '100%'}} spacing={2}>
      <Alert icon={<CheckIcon fontSize='inherit' />} severity='success'>
        This is a success alert — check it out!
      </Alert>
      <Alert
        iconMapping={{
          success: <CheckCircleOutlineIcon fontSize='inherit' />,
        }}
      >
        This is a success alert — check it out!
      </Alert>
      <Alert icon={false} severity='success'>
        This is a success alert — check it out!
      </Alert>
    </Stack>
  );
}