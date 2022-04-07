import {DataGrid, GridCellValue, GridValueFormatterParams} from '@mui/x-data-grid';
import * as React from 'react';

const rows = [
  {
    id: 1,
    taxRate: 0.1,
  },
  {
    id: 2,
    taxRate: 0.2,
  },
  {
    id: 3,
    taxRate: 0.3,
  },
];

export default function ValueParserGrid() {
  return (
    <div style={{height: 300, width: '100%'}}>
      <DataGrid
        rows={rows}
        columns={[
          {
            type: 'number',
            field: 'taxRate',
            headerName: 'Tax Rate',
            width: 150,
            valueFormatter: (parameters: GridValueFormatterParams) => {
              const valueFormatted = Number((parameters.value as number) * 100).toLocaleString();
              return `${valueFormatted} %`;
            },
            valueParser: (value: GridCellValue) => Number(value) / 100,
          },
        ]}
      />
    </div>
  );
}
