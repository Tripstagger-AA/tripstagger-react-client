import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';

interface Column {
  id: 'name' | 'code' | 'population' | 'size' | 'density';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: Column[] = [
  {id: 'name', label: 'Name', minWidth: 170},
  {id: 'code', label: 'ISO\u00A0Code', minWidth: 100},
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Size\u00A0(km\u00B2)',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toFixed(2),
  },
];

interface Data {
  name: string;
  code: string;
  population: number;
  size: number;
  density: number;
}

function createData(name: string, code: string, population: number, size: number): Data {
  const density = population / size;
  return {name, code, population, size, density};
}

const rows = [
  createData('India', 'IN', 1_324_171_354, 3_287_263),
  createData('China', 'CN', 1_403_500_365, 9_596_961),
  createData('Italy', 'IT', 60_483_973, 301_340),
  createData('United States', 'US', 327_167_434, 9_833_520),
  createData('Canada', 'CA', 37_602_103, 9_984_670),
  createData('Australia', 'AU', 25_475_400, 7_692_024),
  createData('Germany', 'DE', 83_019_200, 357_578),
  createData('Ireland', 'IE', 4_857_000, 70_273),
  createData('Mexico', 'MX', 126_577_691, 1_972_550),
  createData('Japan', 'JP', 126_317_000, 377_973),
  createData('France', 'FR', 67_022_000, 640_679),
  createData('United Kingdom', 'GB', 67_545_757, 242_495),
  createData('Russia', 'RU', 146_793_744, 17_098_246),
  createData('Nigeria', 'NG', 200_962_417, 923_768),
  createData('Brazil', 'BR', 210_147_125, 8_515_767),
];

export default function ColumnGroupingTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{width: '100%'}}>
      <TableContainer sx={{maxHeight: 440}}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              <TableCell align='center' colSpan={2}>
                Country
              </TableCell>
              <TableCell align='center' colSpan={3}>
                Details
              </TableCell>
            </TableRow>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{top: 57, minWidth: column.minWidth}}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
              return (
                <TableRow hover role='checkbox' tabIndex={-1} key={row.code}>
                  {columns.map(column => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
