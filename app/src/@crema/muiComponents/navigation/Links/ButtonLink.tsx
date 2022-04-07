/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from '@mui/material/Link';
import * as React from 'react';

export default function ButtonLink() {
  return (
    <Link
      component='button'
      variant='body2'
      onClick={() => {
        console.info("I'm a button.");
      }}
    >
      Button Link
    </Link>
  );
}
