import {useDemoData} from '@mui/x-data-grid-generator';
import {DataGridPro} from '@mui/x-data-grid-pro';
import * as React from 'react';

export default function DataGridProDemo() {
  const {data} = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100_000,
    editable: true,
  });

  return (
    <div style={{height: 520, width: '100%'}}>
      <DataGridPro
        {...data}
        loading={data.rows.length === 0}
        rowHeight={38}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
