import React, {ReactNode} from 'react';
import {IntlProvider} from 'react-intl';
import AppLocale from 'shared/localization';

import {useLocaleContext} from '../AppContextProvider/LocaleContextProvide';
import {IntlGlobalProvider} from '../helper/Utils';

interface AppLocaleProviderProperties {
  children: ReactNode;
}

const AppLocaleProvider: React.FC<AppLocaleProviderProperties> = properties => {
  const {locale} = useLocaleContext();
  const currentAppLocale = AppLocale[locale.locale];

  return (
    <IntlProvider locale={currentAppLocale.locale} messages={currentAppLocale.messages}>
      <IntlGlobalProvider>{properties.children}</IntlGlobalProvider>
    </IntlProvider>
  );
};

export default AppLocaleProvider;
