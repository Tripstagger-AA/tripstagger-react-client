import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import {DataGrid, useGridApiContext, useGridState} from '@mui/x-data-grid';
import {useDemoData} from '@mui/x-data-grid-generator';
import * as React from 'react';

function CustomPagination() {
  const apiReference = useGridApiContext();
  const [state] = useGridState(apiReference);

  return (
    <Pagination
      color='primary'
      count={state.pagination.pageCount}
      page={state.pagination.page + 1}
      onChange={(event, value) => apiReference.current.setPage(value - 1)}
    />
  );
}

export default function CustomPaginationGrid() {
  const {data} = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
    maxColumns: 6,
  });

  return (
    <Box sx={{height: 400, width: '100%'}}>
      <DataGrid
        pagination
        pageSize={5}
        rowsPerPageOptions={[5]}
        components={{
          Pagination: CustomPagination,
        }}
        {...data}
      />
    </Box>
  );
}
