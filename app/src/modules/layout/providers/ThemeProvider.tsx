import React, {createContext, ReactElement, useContext, useState} from 'react';
import { themeConfig } from '../config';


const contextInitialState = {
  theme: themeConfig,
};

export type ThemeContextState = typeof contextInitialState;

interface IProperties {
  children: ReactElement | ReactElement[];
}

const ThemeProvider = createContext<ThemeContextState>(contextInitialState);

export const ThemeContextProvider: React.FC<IProperties> = ({children}) => {
  const [theme] = useState(themeConfig);

  return <ThemeProvider.Provider value={{theme}}>{children}</ThemeProvider.Provider>;
};

export const useThemeContext = () => useContext(ThemeProvider);
