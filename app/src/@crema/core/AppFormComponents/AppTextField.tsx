import TextField from '@mui/material/TextField';
import {TextFieldProps} from '@mui/material/TextField/TextField';
import {FieldHookConfig, useField} from 'formik';
import React from 'react';

const AppTextField = (properties: TextFieldProps & FieldHookConfig<string>) => {
  const [field, meta] = useField(properties);
  const errorText = meta.error && meta.touched ? meta.error : '';
  return <TextField {...properties} {...field} helperText={errorText} error={!!errorText} />;
};

export default AppTextField;
