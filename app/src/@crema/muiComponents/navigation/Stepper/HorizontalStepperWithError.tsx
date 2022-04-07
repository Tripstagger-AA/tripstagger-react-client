import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

export default function HorizontalStepperWithError() {
  const isStepFailed = (step: number) => {
    return step === 1;
  };

  return (
    <Box sx={{width: '100%'}}>
      <Stepper activeStep={1}>
        {steps.map((label, index) => {
          const labelProperties: {
            optional?: React.ReactNode;
            error?: boolean;
          } = {};
          if (isStepFailed(index)) {
            labelProperties.optional = (
              <Typography variant='caption' color='error'>
                Alert message
              </Typography>
            );
            labelProperties.error = true;
          }

          return (
            <Step key={label}>
              <StepLabel {...labelProperties}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
}
