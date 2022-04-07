import Box from '@mui/material/Box';
import CircularProgress, {CircularProgressProps} from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import * as React from 'react';

function CircularProgressWithLabel(properties: CircularProgressProps & {value: number}) {
  return (
    <Box sx={{position: 'relative', display: 'inline-flex'}}>
      <CircularProgress variant='determinate' {...properties} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant='caption' component='div' color='text.secondary'>{`${Math.round(
          properties.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

export default function CircularStatic() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress(previousProgress => (previousProgress >= 100 ? 0 : previousProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <CircularProgressWithLabel value={progress} />;
}
