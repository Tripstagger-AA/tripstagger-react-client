import {DataGrid, GridRowParams} from '@mui/x-data-grid';
import {useDemoData} from '@mui/x-data-grid-generator';
import * as React from 'react';

export default function DisableRowSelection() {
  const {data} = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
    maxColumns: 6,
  });

  return (
    <div style={{height: 400, width: '100%'}}>
      <DataGrid
        {...data}
        isRowSelectable={(parameters: GridRowParams) => parameters.row.quantity > 50_000}
        checkboxSelection
      />
    </div>
  );
}
