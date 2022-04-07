import Radio from '@mui/material/Radio';
import * as React from 'react';

export default function SizeRadioButtons() {
  const [selectedValue, setSelectedValue] = React.useState('a');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const controlProperties = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'size-radio-button-demo',
    inputProps: {'aria-label': item},
  });

  return (
    <div>
      <Radio {...controlProperties('a')} size='small' />
      <Radio {...controlProperties('b')} />
      <Radio
        {...controlProperties('c')}
        sx={{
          '& .MuiSvgIcon-root': {
            fontSize: 28,
          },
        }}
      />
    </div>
  );
}
