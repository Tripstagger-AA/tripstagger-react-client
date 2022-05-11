import '../../public/assets/styles/index.css';
import '../shared/vendors/index.css';

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

interface Properties extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(properties: Properties) {
  const {Component, emotionCache = clientSideEmotionCache, pageProps} = properties;
  const store = useStore(pageProps.initialReduxState);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Tripstagger</title>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <Provider store={store}>
        <CssBaseline />
        <Component {...pageProps} />
      </Provider>
    </CacheProvider>
  );
}
