import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import Typography, {TypographyProps} from '@mui/material/Typography';
import * as React from 'react';

const variants = ['h1', 'h3', 'body1', 'caption'] as readonly TypographyProps['variant'][];

function TypographyDemo(properties: {loading?: boolean}) {
  const {loading = false} = properties;

  return (
    <div>
      {variants.map(variant => (
        <Typography component='div' key={variant} variant={variant}>
          {loading ? <Skeleton /> : variant}
        </Typography>
      ))}
    </div>
  );
}

export default function SkeletonTypography() {
  return (
    <Grid container spacing={8}>
      <Grid item xs>
        <TypographyDemo loading />
      </Grid>
      <Grid item xs>
        <TypographyDemo />
      </Grid>
    </Grid>
  );
}
