import {useField} from 'formik';
import React from 'react';

import AppAutoComplete from './AppAutoComplete';

const AppAutocompleteField = (properties: any) => {
  const [field, meta] = useField(properties);
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <AppAutoComplete
      {...properties}
      {...field}
      helperText={!properties.disabled ? errorText : ''}
      error={!!errorText}
    />
  );
};

export default AppAutocompleteField;
