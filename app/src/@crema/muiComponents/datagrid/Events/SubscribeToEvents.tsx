import Alert from '@mui/material/Alert';
import {useDemoData} from '@mui/x-data-grid-generator';
import {DataGridPro, GridColumnResizeParams, useGridApiRef} from '@mui/x-data-grid-pro';
import * as React from 'react';

export default function SubscribeToEvents() {
  const apiReference = useGridApiRef();
  const [message, setMessage] = React.useState('');
  const {data} = useDemoData({
    dataSet: 'Commodity',
    rowLength: 1,
    maxColumns: 6,
  });

  React.useEffect(() => {
    return apiReference.current.subscribeEvent(
      'columnResize',
      (parameters: GridColumnResizeParams) => {
        setMessage(`Column ${parameters.colDef.headerName} resized to ${parameters.width}px.`);
      },
    );
  }, [apiReference]);

  return (
    <div style={{width: '100%'}}>
      <div style={{height: 180, width: '100%'}}>
        <DataGridPro apiRef={apiReference} {...data} />
      </div>
      {message && (
        <Alert severity='info' style={{marginTop: 8}}>
          {message}
        </Alert>
      )}
    </div>
  );
}
