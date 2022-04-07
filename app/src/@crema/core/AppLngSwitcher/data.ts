export interface LanguageProperties {
  languageId: string;
  locale: string;
  name: string;
}

const languageData: LanguageProperties[] = [
  {
    languageId: 'english',
    locale: 'en',
    name: 'English',
  },
  {
    languageId: 'polish',
    locale: 'pl',
    name: 'Polski',
  },
];
export default languageData;
