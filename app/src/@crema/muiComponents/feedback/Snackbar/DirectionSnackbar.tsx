import Button from '@mui/material/Button';
import Slide, {SlideProps} from '@mui/material/Slide';
import Snackbar from '@mui/material/Snackbar';
import * as React from 'react';

type TransitionProperties = Omit<SlideProps, 'direction'>;

function TransitionLeft(properties: TransitionProperties) {
  return <Slide {...properties} direction='left' />;
}

function TransitionUp(properties: TransitionProperties) {
  return <Slide {...properties} direction='up' />;
}

function TransitionRight(properties: TransitionProperties) {
  return <Slide {...properties} direction='right' />;
}

function TransitionDown(properties: TransitionProperties) {
  return <Slide {...properties} direction='down' />;
}

export default function DirectionSnackbar() {
  const [open, setOpen] = React.useState(false);
  const [transition, setTransition] = React.useState<
    React.ComponentType<TransitionProperties> | undefined
  >();

  const handleClick = (Transition: React.ComponentType<TransitionProperties>) => () => {
    setTransition(() => Transition);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClick(TransitionLeft)}>Right</Button>
      <Button onClick={handleClick(TransitionUp)}>Up</Button>
      <Button onClick={handleClick(TransitionRight)}>Left</Button>
      <Button onClick={handleClick(TransitionDown)}>Down</Button>
      <Snackbar
        open={open}
        onClose={handleClose}
        TransitionComponent={transition}
        message='I love snacks'
        key={transition ? transition.name : ''}
      />
    </div>
  );
}
