import {DataGrid, GridColDef, GridRowId} from '@mui/x-data-grid';
import * as React from 'react';

export interface DataRowModel {
  id: GridRowId;

  [price: string]: number | string;
}

export interface GridData {
  columns: GridColDef[];
  rows: DataRowModel[];
}

function useData(rowLength: number, columnLength: number) {
  const [data, setData] = React.useState<GridData>({columns: [], rows: []});

  React.useEffect(() => {
    const rows: DataRowModel[] = [];

    for (let index = 0; index < rowLength; index += 1) {
      const row = {
        id: index,
      };

      for (let index_ = 1; index_ <= columnLength; index_ += 1) {
        row[`price${index_}M`] = `${index.toString()}, ${index_} `;
      }

      rows.push(row);
    }

    const columns: GridColDef[] = [{field: 'id', hide: true}];

    for (let index = 1; index <= columnLength; index += 1) {
      columns.push({field: `price${index}M`, headerName: `${index}M`});
    }

    setData({
      rows,
      columns,
    });
  }, [rowLength, columnLength]);

  return data;
}

export default function ColumnVirtualizationGrid() {
  const data = useData(100, 1000);

  return (
    <div style={{height: 400, width: '100%'}}>
      <DataGrid {...data} columnBuffer={2} columnThreshold={2} />
    </div>
  );
}
