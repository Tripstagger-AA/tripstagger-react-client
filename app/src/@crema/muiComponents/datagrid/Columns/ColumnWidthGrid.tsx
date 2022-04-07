import {DataGrid} from '@mui/x-data-grid';
import * as React from 'react';

const rows = [
  {
    id: 1,
    username: '@MUI',
    age: 38,
  },
];

export default function ColumnWidthGrid() {
  return (
    <div style={{height: 250, width: '100%'}}>
      <DataGrid columns={[{field: 'username', width: 200}, {field: 'age'}]} rows={rows} />
    </div>
  );
}
