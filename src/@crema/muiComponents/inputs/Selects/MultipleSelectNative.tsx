import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import * as React from 'react';

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

export default function MultipleSelectNative() {
  const [personName, setPersonName] = React.useState<string[]>([]);
  const handleChangeMultiple = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const {options} = event.target;
    const value: string[] = [];
    for (let index = 0, l = options.length; index < l; index += 1) {
      if (options[index].selected) {
        value.push(options[index].value);
      }
    }
    setPersonName(value);
  };

  return (
    <div>
      <FormControl sx={{m: 1, minWidth: 120, maxWidth: 300}}>
        <InputLabel shrink htmlFor='select-multiple-native'>
          Native
        </InputLabel>
        <Select
          multiple
          native
          value={personName}
          // @ts-ignore Typings are not considering `native`
          onChange={handleChangeMultiple}
          label='Native'
          inputProps={{
            id: 'select-multiple-native',
          }}
        >
          {names.map(name => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
