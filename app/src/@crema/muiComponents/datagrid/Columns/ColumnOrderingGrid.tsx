import {useDemoData} from '@mui/x-data-grid-generator';
import {DataGridPro} from '@mui/x-data-grid-pro';
import * as React from 'react';

export default function ColumnOrderingGrid() {
  const {data} = useDemoData({
    dataSet: 'Commodity',
    rowLength: 20,
    maxColumns: 20,
  });

  return (
    <div style={{height: 400, width: '100%'}}>
      <DataGridPro {...data} />
    </div>
  );
}
