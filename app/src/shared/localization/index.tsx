import enLang from './entries/en-US';
import plLang from './entries/pl-PL';

export interface ILanguageProperties {
  languageId: string;
  locale: string;
  name: string;
}

const AppLocale: any = {
  en: enLang,
  pl: plLang,
};

export default AppLocale;

export const languages: ILanguageProperties[] = [
  {
    languageId: 'english',
    locale: 'en',
    name: 'English',
  },
  {
    languageId: 'polish',
    locale: 'pl',
    name: 'Polish',
  },
];

export const defaultLanguage: ILanguageProperties = languages[0];