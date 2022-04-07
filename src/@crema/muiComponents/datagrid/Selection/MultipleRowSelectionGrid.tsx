import {useDemoData} from '@mui/x-data-grid-generator';
import {DataGridPro} from '@mui/x-data-grid-pro';
import * as React from 'react';

export default function MultipleRowSelectionGrid() {
  const {data} = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
    maxColumns: 6,
  });

  return (
    <div style={{height: 400, width: '100%'}}>
      <DataGridPro {...data} pagination pageSize={10} />
    </div>
  );
}
