import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import * as React from 'react';

export default function TabsWrappedLabel() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{width: '100%'}}>
      <Tabs value={value} onChange={handleChange} aria-label='wrapped label tabs example'>
        <Tab
          value='one'
          label='New Arrivals in the Longest Text of Nonfiction that should appear in the next line'
          wrapped
        />
        <Tab value='two' label='Item Two' />
        <Tab value='three' label='Item Three' />
      </Tabs>
    </Box>
  );
}
