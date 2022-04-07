import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import {createTheme, StyledEngineProvider, ThemeProvider} from '@mui/material/styles';
import React, {ReactElement} from 'react';
import AppLocale from 'shared/localization';

import {useLocaleContext} from '../AppContextProvider/LocaleContextProvide';
import {useThemeContext} from '../AppContextProvider/ThemeContextProvider';

interface AppThemeProviderProperties {
  children: ReactElement;
}

const AppThemeProvider: React.FC<AppThemeProviderProperties> = properties => {
  const {theme} = useThemeContext();
  const {locale} = useLocaleContext();
  const {muiLocale} = AppLocale[locale.locale];

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={createTheme(theme, muiLocale)}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          {properties.children}
        </LocalizationProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default AppThemeProvider;
