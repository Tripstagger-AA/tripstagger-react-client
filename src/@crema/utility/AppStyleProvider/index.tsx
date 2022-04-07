import createCache from '@emotion/cache';
import {CacheProvider} from '@emotion/react';
import React, {ReactElement} from 'react';
import rtlPlugin from 'stylis-plugin-rtl';

import {LayoutDirection} from '../../../shared/constants/AppEnums';
import {useThemeContext} from '../AppContextProvider/ThemeContextProvider';

// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [rtlPlugin],
});

interface AppStyleProviderProperties {
  children: ReactElement;
}

const AppStyleProvider: React.FC<AppStyleProviderProperties> = properties => {
  const {theme} = useThemeContext();
  if (theme.direction === LayoutDirection.LTR) return properties.children;
  return <CacheProvider value={cacheRtl}>{properties.children}</CacheProvider>;
};
export default AppStyleProvider;
