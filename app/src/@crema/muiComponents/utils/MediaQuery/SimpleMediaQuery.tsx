import useMediaQuery from '@mui/material/useMediaQuery';
import * as React from 'react';

export default function SimpleMediaQuery() {
  const matches = useMediaQuery('(min-width:600px)');

  return <span>{`(min-width:600px) matches: ${matches}`}</span>;
}
