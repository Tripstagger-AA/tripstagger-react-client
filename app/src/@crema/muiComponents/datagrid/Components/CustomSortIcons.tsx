import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {DataGrid} from '@mui/x-data-grid';
import * as React from 'react';

export function SortedDescendingIcon() {
  return <ExpandMoreIcon className='icon' />;
}

export function SortedAscendingIcon() {
  return <ExpandLessIcon className='icon' />;
}

const rows = [
  {
    id: 1,
    name: 'MUI',
    stars: 28_000,
  },
  {
    id: 2,
    name: 'DataGrid',
    stars: 15_000,
  },
];

const columns = [
  {field: 'name', width: 150},
  {field: 'stars', width: 150},
];

export default function CustomSortIcons() {
  return (
    <div style={{height: 250, width: '100%'}}>
      <DataGrid
        columns={columns}
        rows={rows}
        sortModel={[
          {field: 'name', sort: 'asc'},
          {field: 'stars', sort: 'desc'},
        ]}
        components={{
          ColumnSortedDescendingIcon: SortedDescendingIcon,
          ColumnSortedAscendingIcon: SortedAscendingIcon,
        }}
      />
    </div>
  );
}
