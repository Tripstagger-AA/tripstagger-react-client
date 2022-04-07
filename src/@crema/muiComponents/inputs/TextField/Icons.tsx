import AccountCircle from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import * as React from 'react';

export default function InputWithIcon() {
  return (
    <Box sx={{'& > :not(style)': {m: 1}}}>
      <FormControl variant='standard'>
        <InputLabel htmlFor='input-with-icon-adornment'>With a start adornment</InputLabel>
        <Input
          id='input-with-icon-adornment'
          startAdornment={
            <InputAdornment position='start'>
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
      <TextField
        id='input-with-icon-textfield'
        label='TextField'
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant='standard'
      />
      <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
        <AccountCircle sx={{color: 'action.active', mr: 1, my: 0.5}} />
        <TextField id='input-with-sx' label='With sx' variant='standard' />
      </Box>
    </Box>
  );
}
