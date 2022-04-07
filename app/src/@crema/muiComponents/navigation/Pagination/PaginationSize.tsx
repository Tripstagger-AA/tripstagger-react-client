import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import * as React from 'react';

export default function PaginationSize() {
  return (
    <Stack spacing={2}>
      <Pagination count={10} size='small' />
      <Pagination count={10} />
      <Pagination count={10} size='large' />
    </Stack>
  );
}
