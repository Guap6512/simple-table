import React from 'react';
import {css} from '@emotion/css';
import {TableProps, DataRowType} from './table-types';
import {TableRow} from './components/table-row';
import {TableHead} from './components/table-head';

export const Table = <T extends DataRowType>({
  columns,
  data,
  rowKey,
}: TableProps<T>): JSX.Element => {

  return (
    <table
      className={css`
        border-collapse: collapse;
        
        & td, th {
          border: 1px solid black;
          padding: 10px;
          background-color: lightblue;
        }
      `}
    >
      <thead>
        <tr>
          {columns.map(column => (
            <TableHead
              column={column}
              key={column.dataKey}
            />
          ))}
        </tr>
      </thead>
      <tbody>
      {data.map((row, index) => (
        <TableRow
          key={row[rowKey] as React.Key}
          index={index}
          rowData={row}
          columns={columns}
        />
      ))}
      </tbody>
    </table>
  )
};
