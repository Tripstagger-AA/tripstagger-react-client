import {Chip} from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import {AutocompleteProps} from '@mui/material/Autocomplete/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import React from 'react';

export interface AppAutoCompleteProperties extends AutocompleteProps<any, any, any, any> {
  onType: (e: string) => void;
  options: any[];
  onChange: () => void;
  handleChange: (e: any) => void;
  placeholder: string;
  keyName: string;
  idField: string;
  value: any;
  name: string;
  disabled: boolean;
  multiple: boolean;
  dataLoading: boolean;
  helperText: string;
  error: boolean;
  disabledId: any[];
}

const AppAutoComplete: React.FC<AppAutoCompleteProperties> = ({
  options = [],
  onType = () => {},
  keyName,
  idField = 'id',
  name,
  placeholder,
  dataLoading,
  handleChange,
  disabled,
  disabledId = [],
  value,
  helperText = '',
  error,
  multiple = false,
}) => {
  const loading = !disabled && dataLoading;

  const onSelectValue = (e: any, value: any[] | any) => {
    const event = {
      target: {
        name,
        value: multiple ? value.map((data: any) => data?.[idField]) : value?.[idField],
      },
    };
    if (handleChange) handleChange(event);
  };

  const getValue = () => {
    if (multiple) {
      return value ? options?.filter(option => value.includes(option?.[idField])) : [];
    }
    return options?.find(option => option?.[idField] === value) || null;
  };

  return (
    <Autocomplete
      disabled={disabled}
      multiple={multiple}
      onChange={onSelectValue}
      isOptionEqualToValue={(option, value) => {
        return multiple
          ? option?.[idField] === value?.[idField]
          : option?.[idField] === value?.[idField];
      }}
      getOptionLabel={option => option?.[keyName]}
      options={options}
      loading={loading}
      // name={name}
      value={getValue()}
      renderTags={(tagValue, getTagProperties) =>
        tagValue.map((option, index) => (
          <Chip
            label={option[keyName]}
            {...getTagProperties({index})}
            disabled={disabledId.includes(option?.[idField])}
          />
        ))
      }
      renderInput={parameters => (
        <TextField
          name={name}
          placeholder={placeholder}
          {...parameters}
          variant='outlined'
          onChange={event_ => onType(event_.target.value)}
          InputProps={{
            ...parameters.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color='inherit' size={20} /> : null}
                {parameters.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
          helperText={helperText}
          error={error}
        />
      )}
    />
  );
};
export default AppAutoComplete;
