import PropTypes from 'prop-types';
import React, {createContext, useContext, useEffect, useState} from 'react';

import {LayoutDirection} from '../../../shared/constants/AppEnums';
import {LanguageProps as LanguageProperties} from '../../core/AppLngSwitcher/data';
import defaultConfig from './defaultConfig';
import {useThemeActionsContext, useThemeContext} from './ThemeContextProvider';

export interface LocaleContextData {
  locale: LanguageProperties;
  rtlLocale: string[];
}

export interface LocaleActionsData {
  updateLocale: (locale: LanguageProperties) => void;
}

export const LocaleContext = createContext<LocaleContextData>({
  locale: defaultConfig.locale,
  rtlLocale: defaultConfig.rtlLocale,
});
export const LocaleActionsContext = createContext<LocaleActionsData>({
  updateLocale: () => {},
});

export const useLocaleContext = () => useContext(LocaleContext);

export const useLocaleActionsContext = () => useContext(LocaleActionsContext);

const LocaleContextProvider: React.FC<React.ReactNode> = ({children}) => {
  const [locale, updateLocale] = useState<LanguageProperties>(defaultConfig.locale);
  const {theme} = useThemeContext();
  const {updateTheme} = useThemeActionsContext();

  useEffect(() => {
    if (
      defaultConfig.rtlLocale.includes(locale.locale) &&
      theme.direction === LayoutDirection.LTR
    ) {
      updateTheme({
        ...theme,
        direction: LayoutDirection.RTL,
      });
    } else if (
      !defaultConfig.rtlLocale.includes(locale.locale) &&
      theme.direction === LayoutDirection.RTL
    ) {
      updateTheme({
        ...theme,
        direction: LayoutDirection.LTR,
      });
    }
  }, [locale, theme, updateTheme]);

  return (
    <LocaleContext.Provider
      value={{
        locale,
        rtlLocale: defaultConfig.rtlLocale,
      }}
    >
      <LocaleActionsContext.Provider
        value={{
          updateLocale,
        }}
      >
        {children}
      </LocaleActionsContext.Provider>
    </LocaleContext.Provider>
  );
};

export default LocaleContextProvider;

LocaleContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
