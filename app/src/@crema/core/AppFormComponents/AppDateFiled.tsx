import DatePicker from '@mui/lab/DatePicker';
import {DatePickerProps} from '@mui/lab/DatePicker/DatePicker';
import TextField from '@mui/material/TextField';
import {TextFieldProps} from '@mui/material/TextField/TextField';
import {Field, FieldHookConfig} from 'formik';
import React from 'react';

const AppDateFiled = (properties: TextFieldProps & DatePickerProps & FieldHookConfig<string>) => {
  return (
    <Field
      component={DatePicker}
      variant='outlined'
      inputVariant='outlined'
      format='YYYY-MM-DD'
      mask='____-__-__'
      autoOk
      {...properties}
      renderInput={(parameters: any) => (
        <TextField className={properties.className} {...parameters} />
      )}
    />
  );
};

export default AppDateFiled;
