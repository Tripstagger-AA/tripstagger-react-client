import useMediaQuery from '@mui/material/useMediaQuery';
import json2mq from 'json2mq';
import * as React from 'react';

export default function JavaScriptMedia() {
  const matches = useMediaQuery(
    json2mq({
      minWidth: 600,
    }),
  );

  return <span>{`{ minWidth: 600 } matches: ${matches}`}</span>;
}
