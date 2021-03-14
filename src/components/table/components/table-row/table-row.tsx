import React from 'react';
import {DataRowType} from '../../table-types';
import {TableRowProps} from './table-row-types';
import {TableCell} from '../table-cell';

export const TableRow = <T extends DataRowType>({
  rowData,
  columns,
  index,
}: TableRowProps<T>): JSX.Element => (
  <tr>
    {columns.map((column) =>
      <TableCell
        rowIndex={index}
        record={rowData}
        column={column}
        key={column.dataKey}
      />
    )}
  </tr>
);
