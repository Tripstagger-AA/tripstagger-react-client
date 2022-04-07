import Button from '@mui/material/Button';
import {useDemoData} from '@mui/x-data-grid-generator';
import {DataGridPro, useGridApiRef} from '@mui/x-data-grid-pro';
import * as React from 'react';

export default function ApiReferencePaginationGrid() {
  const apiReference = useGridApiRef();
  const {data} = useDemoData({
    dataSet: 'Commodity',
    rowLength: 10,
    maxColumns: 6,
  });

  const handleClick = () => {
    apiReference.current.setPage(1);
  };

  return (
    <div
      style={{
        width: '100%',
      }}
    >
      <Button color='primary' variant='outlined' onClick={handleClick}>
        Set page 2
      </Button>
      <div style={{height: 400, width: '100%', marginTop: 16}}>
        <DataGridPro
          pagination
          pageSize={5}
          rowsPerPageOptions={[5]}
          apiRef={apiReference}
          {...data}
        />
      </div>
    </div>
  );
}
