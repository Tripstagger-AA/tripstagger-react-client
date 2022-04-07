import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import * as React from 'react';

export default function BasicButtonGroup() {
  return (
    <ButtonGroup variant='contained' aria-label='outlined primary button group'>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  );
}
