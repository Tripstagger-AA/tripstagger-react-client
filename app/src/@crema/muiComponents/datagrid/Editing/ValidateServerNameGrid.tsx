import Box from '@mui/material/Box';
import {styled} from '@mui/material/styles';
import {
  DataGridPro,
  GridColumns,
  GridEditCellProps,
  GridPreProcessEditCellProps,
  GridRowsProp,
  useGridApiRef,
} from '@mui/x-data-grid-pro';
import * as React from 'react';

const StyledBox = styled(Box)(({theme}) => ({
  height: 400,
  width: '100%',
  '& .MuiDataGrid-cell--editable': {
    backgroundColor: theme.palette.mode === 'dark' ? '#376331' : 'rgb(217 243 190)',
  },
  '& .Mui-error': {
    backgroundColor: `rgb(126,10,15, ${theme.palette.mode === 'dark' ? 0 : 0.1})`,
    color: theme.palette.mode === 'dark' ? '#ff4343' : '#750f0f',
  },
}));

let promiseTimeout: any;

function validateName(username: string): Promise<boolean> {
  const existingUsers = new Set(rows.map(row => row.name.toLowerCase()));

  return new Promise<any>(resolve => {
    promiseTimeout = setTimeout(() => {
      resolve(!existingUsers.has(username.toLowerCase()));
    }, Math.random() * 500 + 100); // simulate network latency
  });
}

export default function ValidateServerNameGrid() {
  const apiReference = useGridApiRef();

  const keyStrokeTimeoutReference = React.useRef<any>();

  const preProcessEditCellProperties = (parameters: GridPreProcessEditCellProps) =>
    new Promise<GridEditCellProps>(resolve => {
      clearTimeout(promiseTimeout);
      clearTimeout(keyStrokeTimeoutReference.current);

      // basic debouncing here
      keyStrokeTimeoutReference.current = setTimeout(async () => {
        const isValid = await validateName(parameters.props.value!.toString());
        resolve({...parameters.props, error: !isValid});
      }, 100);
    });

  const columns: GridColumns = [
    {
      field: 'name',
      headerName: 'MUI Contributor',
      width: 180,
      editable: true,
      preProcessEditCellProps: preProcessEditCellProperties,
    },
  ];

  React.useEffect(() => {
    return () => {
      clearTimeout(promiseTimeout);
      clearTimeout(keyStrokeTimeoutReference.current);
    };
  }, []);

  return (
    <StyledBox>
      <DataGridPro
        apiRef={apiReference}
        rows={rows}
        columns={columns}
        isCellEditable={parameters => parameters.row.id === 5}
      />
    </StyledBox>
  );
}

const rows: GridRowsProp = [
  {
    id: 1,
    name: 'Damien',
  },
  {
    id: 2,
    name: 'Olivier',
  },
  {
    id: 3,
    name: 'Danail',
  },
  {
    id: 4,
    name: 'Matheus',
  },
  {
    id: 5,
    name: 'You?',
  },
];
