import {randomInt, randomUserName} from '@mui/x-data-grid-generator';
import {DataGridPro, useGridApiRef} from '@mui/x-data-grid-pro';
import * as React from 'react';
import {interval} from 'rxjs';

const columns = [
  {field: 'id'},
  {field: 'username', width: 150},
  {field: 'age', width: 80, type: 'number'},
];

const rows = [
  {id: 1, username: randomUserName(), age: randomInt(10, 80)},
  {id: 2, username: randomUserName(), age: randomInt(10, 80)},
  {id: 3, username: randomUserName(), age: randomInt(10, 80)},
  {id: 4, username: randomUserName(), age: randomInt(10, 80)},
];

export default function ApiReferenceRowsGrid() {
  const apiReference = useGridApiRef();

  React.useEffect(() => {
    const subscription = interval(200).subscribe(() => {
      apiReference.current.updateRows([
        {
          id: randomInt(1, 4),
          username: randomUserName(),
          age: randomInt(10, 80),
        },
        {
          id: randomInt(1, 4),
          username: randomUserName(),
          age: randomInt(10, 80),
        },
      ]);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [apiReference]);

  return (
    <div style={{height: 400, width: '100%'}}>
      <DataGridPro rows={rows} columns={columns} apiRef={apiReference} />
    </div>
  );
}
