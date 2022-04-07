import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import * as React from 'react';

export default function ColorToggleButton() {
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup color='primary' value={alignment} exclusive onChange={handleChange}>
      <ToggleButton value='web'>Web</ToggleButton>
      <ToggleButton value='android'>Android</ToggleButton>
      <ToggleButton value='ios'>iOS</ToggleButton>
    </ToggleButtonGroup>
  );
}
