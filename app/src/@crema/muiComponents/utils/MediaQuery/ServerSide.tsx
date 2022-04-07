import {Theme, ThemeProvider} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import mediaQuery from 'css-mediaquery';
import * as React from 'react';

function MyComponent() {
  const matches = useMediaQuery('(min-width:600px)');

  return <span>{`(min-width:600px) matches: ${matches}`}</span>;
}

export default function ServerSide() {
  const ssrMatchMedia = (query: string) => ({
    matches: mediaQuery.match(query, {
      // The estimated CSS width of the browser.
      width: 800,
    }),
  });

  return (
    <ThemeProvider<Theme>
      theme={{
        components: {
          MuiUseMediaQuery: {
            // Change the default options of useMediaQuery
            defaultProps: {ssrMatchMedia},
          },
        },
      }}
    >
      <MyComponent />
    </ThemeProvider>
  );
}
