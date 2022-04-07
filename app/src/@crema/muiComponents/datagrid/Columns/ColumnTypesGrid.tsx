import DeleteIcon from '@mui/icons-material/Delete';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import SecurityIcon from '@mui/icons-material/Security';
import {DataGrid, GridActionsCellItem, GridRowId, GridValueOptionsParams} from '@mui/x-data-grid';
import {randomCreatedDate, randomUpdatedDate} from '@mui/x-data-grid-generator';
import * as React from 'react';

const initialRows = [
  {
    id: 1,
    name: 'Damien',
    age: 25,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
    isAdmin: true,
    country: 'Spain',
    discount: '',
  },
  {
    id: 2,
    name: 'Nicolas',
    age: 36,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
    isAdmin: false,
    country: 'France',
    discount: '',
  },
  {
    id: 3,
    name: 'Kate',
    age: 19,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
    isAdmin: false,
    country: 'Brazil',
    discount: 'junior',
  },
];

export default function ColumnTypesGrid() {
  const [rows, setRows] = React.useState(initialRows);

  const deleteUser = React.useCallback(
    (id: GridRowId) => () => {
      setTimeout(() => {
        setRows(previousRows => previousRows.filter(row => row.id !== id));
      });
    },
    [],
  );

  const toggleAdmin = React.useCallback(
    (id: GridRowId) => () => {
      setRows(previousRows =>
        previousRows.map(row => (row.id === id ? {...row, isAdmin: !row.isAdmin} : row)),
      );
    },
    [],
  );

  const duplicateUser = React.useCallback(
    (id: GridRowId) => () => {
      setRows(previousRows => {
        const rowToDuplicate = previousRows.find(row => row.id === id)!;
        return [...previousRows, {...rowToDuplicate, id: Date.now()}];
      });
    },
    [],
  );

  const columns = React.useMemo(
    () => [
      {field: 'name', type: 'string'},
      {field: 'age', type: 'number'},
      {field: 'dateCreated', type: 'date', width: 130},
      {field: 'lastLogin', type: 'dateTime', width: 180},
      {field: 'isAdmin', type: 'boolean', width: 120},
      {
        field: 'country',
        type: 'singleSelect',
        width: 120,
        valueOptions: ['Bulgaria', 'Netherlands', 'France', 'United Kingdom', 'Spain', 'Brazil'],
      },
      {
        field: 'discount',
        type: 'singleSelect',
        width: 120,
        editable: true,
        valueOptions: ({row}: GridValueOptionsParams) => {
          if (row === undefined) {
            return ['EU-resident', 'junior'];
          }
          const options: string[] = [];
          if (!['United Kingdom', 'Brazil'].includes(row.country)) {
            options.push('EU-resident');
          }
          if (row.age < 27) {
            options.push('junior');
          }
          return options;
        },
      },
      {
        field: 'actions',
        type: 'actions',
        width: 80,
        getActions: parameters => [
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label='Delete'
            onClick={deleteUser(parameters.id)}
          />,
          <GridActionsCellItem
            icon={<SecurityIcon />}
            label='Toggle Admin'
            onClick={toggleAdmin(parameters.id)}
            showInMenu
          />,
          <GridActionsCellItem
            icon={<FileCopyIcon />}
            label='Duplicate User'
            onClick={duplicateUser(parameters.id)}
            showInMenu
          />,
        ],
      },
    ],
    [deleteUser, toggleAdmin, duplicateUser],
  );

  return (
    <div style={{height: 300, width: '100%'}}>
      <DataGrid columns={columns} rows={rows} />
    </div>
  );
}
