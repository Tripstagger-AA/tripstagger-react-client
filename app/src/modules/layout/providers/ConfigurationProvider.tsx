import AppLocale from '@app/shared/localization';
import {LocalizationProvider} from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import {createTheme, StyledEngineProvider} from '@mui/material/styles';
import {ThemeProvider} from '@mui/styles';
import React, {ReactElement} from 'react';

import {useLanguageContext} from './LanguageProvider';
import {useThemeContext} from './ThemeProvider';

interface IProperties {
  children: ReactElement | ReactElement[];
}

export const ConfigurationProvider: React.FC<IProperties> = ({children}) => {
  const {theme} = useThemeContext();
  const {language} = useLanguageContext();
  const {muiLocale} = AppLocale[language.locale];

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={createTheme(theme, muiLocale)}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>{children}</LocalizationProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
