import {DataGrid} from '@mui/x-data-grid';
import {useDemoData} from '@mui/x-data-grid-generator';
import * as React from 'react';

export default function DoubleClickWithCtrlToEdit() {
  const {data} = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
    maxColumns: 6,
    editable: true,
  });

  return (
    <div style={{height: 300, width: '100%'}}>
      <DataGrid
        onCellDoubleClick={(parameters, event) => {
          if (!event.ctrlKey) {
            event.defaultMuiPrevented = true;
          }
        }}
        {...data}
      />
    </div>
  );
}
