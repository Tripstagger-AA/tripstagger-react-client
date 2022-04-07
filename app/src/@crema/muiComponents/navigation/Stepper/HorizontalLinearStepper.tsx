import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep(previousActiveStep => previousActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep(previousActiveStep => previousActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep(previousActiveStep => previousActiveStep + 1);
    setSkipped(previousSkipped => {
      const newSkipped = new Set(previousSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{width: '100%'}}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProperties: {completed?: boolean} = {};
          const labelProperties: {
            optional?: React.ReactNode;
          } = {};
          if (isStepOptional(index)) {
            labelProperties.optional = <Typography variant='caption'>Optional</Typography>;
          }
          if (isStepSkipped(index)) {
            stepProperties.completed = false;
          }
          return (
            <Step key={label} {...stepProperties}>
              <StepLabel {...labelProperties}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{mt: 2, mb: 1}}>All steps completed - you&apos;re finished</Typography>
          <Box sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
            <Box sx={{flex: '1 1 auto'}} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{mt: 2, mb: 1}}>Step {activeStep + 1}</Typography>
          <Box sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
            <Button color='inherit' disabled={activeStep === 0} onClick={handleBack} sx={{mr: 1}}>
              Back
            </Button>
            <Box sx={{flex: '1 1 auto'}} />
            {isStepOptional(activeStep) && (
              <Button color='inherit' onClick={handleSkip} sx={{mr: 1}}>
                Skip
              </Button>
            )}
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}