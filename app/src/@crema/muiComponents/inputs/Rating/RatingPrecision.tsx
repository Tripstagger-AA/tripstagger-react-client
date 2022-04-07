import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import * as React from 'react';

export default function HalfRating() {
  return (
    <Stack spacing={1}>
      <Rating name='half-rating' defaultValue={2.5} precision={0.5} />
      <Rating name='half-rating-read' defaultValue={2.5} precision={0.5} readOnly />
    </Stack>
  );
}
