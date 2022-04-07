import LinearProgress from '@mui/material/LinearProgress';
import {DataGrid, GridOverlay} from '@mui/x-data-grid';
import {useDemoData} from '@mui/x-data-grid-generator';
import * as React from 'react';

function CustomLoadingOverlay() {
  return (
    <GridOverlay>
      <div style={{position: 'absolute', top: 0, width: '100%'}}>
        <LinearProgress />
      </div>
    </GridOverlay>
  );
}

export default function CustomLoadingOverlayGrid() {
  const {data} = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
    maxColumns: 6,
  });

  return (
    <div style={{height: 400, width: '100%'}}>
      <DataGrid
        components={{
          LoadingOverlay: CustomLoadingOverlay,
        }}
        loading
        {...data}
      />
    </div>
  );
}