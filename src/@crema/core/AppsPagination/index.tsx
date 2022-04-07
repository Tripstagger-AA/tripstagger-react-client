import TablePagination from '@mui/material/TablePagination';
import React from 'react';

interface AppsPaginationProperties {
  count: number;
  page: number;
  onPageChange: (event: React.MouseEvent<HTMLButtonElement> | null, page: number) => void;
  rowsPerPage?: number;

  [x: string]: any;
}

const AppsPagination: React.FC<AppsPaginationProperties> = ({
  count,
  page,
  onPageChange,
  rowsPerPage = 15,
  ...rest
}) => {
  return (
    <TablePagination
      component='div'
      count={count}
      rowsPerPage={rowsPerPage}
      page={page}
      backIconButtonProps={{'aria-label': 'Previous Page'}}
      nextIconButtonProps={{'aria-label': 'Next Page'}}
      onPageChange={onPageChange}
      rowsPerPageOptions={[]}
      {...rest}
    />
  );
};

export default AppsPagination;
