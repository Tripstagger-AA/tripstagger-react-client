import {pink} from '@mui/material/colors';
import Radio from '@mui/material/Radio';
import * as React from 'react';

export default function ColorRadioButtons() {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const controlProperties = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: {'aria-label': item},
  });

  return (
    <div>
      <Radio {...controlProperties('a')} />
      <Radio {...controlProperties('b')} color='secondary' />
      <Radio {...controlProperties('c')} color='success' />
      <Radio {...controlProperties('d')} color='default' />
      <Radio
        {...controlProperties('e')}
        sx={{
          color: pink[800],
          '&.Mui-checked': {
            color: pink[600],
          },
        }}
      />
    </div>
  );
}
