import Alert from '@mui/material/Alert';
import {randomCreatedDate, randomTraderName, randomUpdatedDate} from '@mui/x-data-grid-generator';
import {DataGridPro, GridEvents, useGridApiRef} from '@mui/x-data-grid-pro';
import * as React from 'react';

export default function CatchEditingEventsGrid() {
  const apiReference = useGridApiRef();
  const [message, setMessage] = React.useState('');

  React.useEffect(() => {
    return apiReference.current.subscribeEvent(GridEvents.cellEditStart, (parameters, event) => {
      setMessage(
        `Editing cell with value: ${parameters.value} and row id: ${parameters.id}, column: ${parameters.field}, triggered by ${event.type}.`,
      );
    });
  }, [apiReference]);

  React.useEffect(() => {
    return apiReference.current.subscribeEvent(GridEvents.cellEditStop, () => {
      setMessage('');
    });
  }, [apiReference]);

  return (
    <div style={{width: '100%'}}>
      <div style={{height: 180, width: '100%'}}>
        <DataGridPro rows={rows} columns={columns} apiRef={apiReference} />
      </div>
      {message && (
        <Alert severity='info' style={{marginTop: 8}}>
          {message}
        </Alert>
      )}
    </div>
  );
}

const columns = [
  {field: 'name', headerName: 'Name', width: 180, editable: true},
  {field: 'age', headerName: 'Age', type: 'number', editable: true},
  {
    field: 'dateCreated',
    headerName: 'Date Created',
    type: 'date',
    width: 180,
    editable: true,
  },
  {
    field: 'lastLogin',
    headerName: 'Last Login',
    type: 'dateTime',
    width: 220,
    editable: true,
  },
];

const rows = [
  {
    id: 1,
    name: randomTraderName(),
    age: 25,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
];
