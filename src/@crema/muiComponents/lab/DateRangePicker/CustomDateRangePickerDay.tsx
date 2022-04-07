import AdapterDateFns from '@mui/lab/AdapterDateFns';
import {DateRange} from '@mui/lab/DateRangePicker';
import MuiDateRangePickerDay, {DateRangePickerDayProps} from '@mui/lab/DateRangePickerDay';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDateRangePicker from '@mui/lab/StaticDateRangePicker';
import Box from '@mui/material/Box';
import {styled} from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import * as React from 'react';

const DateRangePickerDay = styled(MuiDateRangePickerDay)(
  ({theme, isHighlighting, isStartOfHighlighting, isEndOfHighlighting}) => ({
    ...(isHighlighting && {
      borderRadius: 0,
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      '&:hover, &:focus': {
        backgroundColor: theme.palette.primary.dark,
      },
    }),
    ...(isStartOfHighlighting && {
      borderTopLeftRadius: '50%',
      borderBottomLeftRadius: '50%',
    }),
    ...(isEndOfHighlighting && {
      borderTopRightRadius: '50%',
      borderBottomRightRadius: '50%',
    }),
  }),
) as React.ComponentType<DateRangePickerDayProps<Date>>;

export default function CustomDateRangePickerDay() {
  const [value, setValue] = React.useState<DateRange<Date>>([null, null]);

  const renderWeekPickerDay = (
    date: Date,
    dateRangePickerDayProperties: DateRangePickerDayProps<Date>,
  ) => {
    return <DateRangePickerDay {...dateRangePickerDayProperties} />;
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDateRangePicker
        displayStaticWrapperAs='desktop'
        label='date range'
        value={value}
        onChange={newValue => setValue(newValue)}
        renderDay={renderWeekPickerDay}
        renderInput={(startProperties, endProperties) => (
          <React.Fragment>
            <TextField {...startProperties} />
            <Box sx={{mx: 2}}> to </Box>
            <TextField {...endProperties} />
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
  );
}
