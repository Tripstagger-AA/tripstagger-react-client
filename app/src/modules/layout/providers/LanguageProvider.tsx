import {defaultLanguage, ILanguageProperties} from '@app/shared/localization';
import React, {createContext, ReactElement, useContext, useState} from 'react';

const contextInitialState = {
  language: defaultLanguage,
  setLanguage: (language: ILanguageProperties) => {}
};

export type LanguageContextState = typeof contextInitialState;

interface IProperties {
  children: ReactElement | ReactElement[];
}

const LanguageContext = createContext<LanguageContextState>(contextInitialState);

export const LanguageProvider: React.FC<IProperties> = ({children}) => {
  const [language, setLanguage] = useState<ILanguageProperties>(defaultLanguage);

  return <LanguageContext.Provider value={{language, setLanguage}}>{children}</LanguageContext.Provider>;
};

export const useLanguageContext = () => useContext(LanguageContext);
