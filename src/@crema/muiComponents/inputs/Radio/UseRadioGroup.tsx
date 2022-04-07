import FormControlLabel, {FormControlLabelProps} from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup, {useRadioGroup} from '@mui/material/RadioGroup';
import {styled} from '@mui/material/styles';
import * as React from 'react';

interface StyledFormControlLabelProperties extends FormControlLabelProps {
  checked: boolean;
}

const StyledFormControlLabel = styled((properties: StyledFormControlLabelProperties) => (
  <FormControlLabel {...properties} />
))(({theme, checked}) => ({
  '.MuiFormControlLabel-label': checked && {
    color: theme.palette.primary.main,
  },
}));

function MyFormControlLabel(properties: FormControlLabelProps) {
  const radioGroup = useRadioGroup();

  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === properties.value;
  }

  return <StyledFormControlLabel checked={checked} {...properties} />;
}

export default function UseRadioGroup() {
  return (
    <RadioGroup name='use-radio-group' defaultValue='first'>
      <MyFormControlLabel value='first' label='First' control={<Radio />} />
      <MyFormControlLabel value='second' label='Second' control={<Radio />} />
    </RadioGroup>
  );
}
