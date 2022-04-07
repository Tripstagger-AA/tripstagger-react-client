import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Button from '@mui/material/Button';
import MobileStepper from '@mui/material/MobileStepper';
import {useTheme} from '@mui/material/styles';
import * as React from 'react';

export default function ProgressMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(previousActiveStep => previousActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(previousActiveStep => previousActiveStep - 1);
  };

  return (
    <MobileStepper
      variant='progress'
      steps={6}
      position='static'
      activeStep={activeStep}
      sx={{maxWidth: 400, flexGrow: 1}}
      nextButton={
        <Button size='small' onClick={handleNext} disabled={activeStep === 5}>
          Next
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </Button>
      }
      backButton={
        <Button size='small' onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          Back
        </Button>
      }
    />
  );
}