import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import * as React from 'react';

export default function DisableElevation() {
  return (
    <ButtonGroup disableElevation variant='contained'>
      <Button>One</Button>
      <Button>Two</Button>
    </ButtonGroup>
  );
}
