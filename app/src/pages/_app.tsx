import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../../public/assets/styles/index.css';
import '../shared/vendors/index.css';

import FirebaseAuthProvider from '@app/auth/providers/FirebaseAuthProvider';
import AuthRoutes from '@app/auth/services/AuthRoutes';
import {
  AppContextProvider,
  AppLocaleProvider,
  AppStyleProvider,
  AppThemeProvider,
} from '@app/crema';
import {EmotionCache} from '@emotion/cache';
import {CacheProvider} from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import {AppProps} from 'next/app';
import Head from 'next/head';
import React from 'react';
import {Provider} from 'react-redux';

import createEmotionCache from '../createEmotionCache';
import {useStore} from '../redux/store'; // Client-side cache, shared for the whole session of the user in the browser.

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProperties extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(properties: MyAppProperties) {
  const {Component, emotionCache = clientSideEmotionCache, pageProps} = properties;
  const store = useStore(pageProps.initialReduxState);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Crema material</title>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <AppContextProvider>
        <Provider store={store}>
          <FirebaseAuthProvider>
            <AuthRoutes>
              <CssBaseline />
              <Component {...pageProps} />
            </AuthRoutes>
          </FirebaseAuthProvider>
        </Provider>
      </AppContextProvider>
    </CacheProvider>
  );
}
