import {useDemoData} from '@mui/x-data-grid-generator';
import {DataGridPro, GridSortDirection, GridSortModel} from '@mui/x-data-grid-pro';
import * as React from 'react';

export default function MultiSortingGrid() {
  const {data} = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
    maxColumns: 6,
  });

  const [sortModel, setSortModel] = React.useState<GridSortModel>([
    {
      field: 'commodity',
      sort: 'asc' as GridSortDirection,
    },
    {
      field: 'desk',
      sort: 'desc' as GridSortDirection,
    },
  ]);

  return (
    <div style={{height: 400, width: '100%'}}>
      <DataGridPro
        {...data}
        sortModel={sortModel}
        onSortModelChange={model => setSortModel(model)}
      />
    </div>
  );
}
