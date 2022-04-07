import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import * as React from 'react';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function BasicBreadcrumbs() {
  return (
    <div role='presentation' onClick={handleClick}>
      <Breadcrumbs aria-label='breadcrumb'>
        <Link underline='hover' color='inherit' href='/'>
          MUI
        </Link>
        <Link underline='hover' color='inherit' href='/getting-started/installation/'>
          Core
        </Link>
        <Typography color='text.primary'>Breadcrumbs</Typography>
      </Breadcrumbs>
    </div>
  );
}
