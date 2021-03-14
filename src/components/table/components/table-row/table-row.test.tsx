import React from 'react';
import { render, screen } from '@testing-library/react';
import {DataRowType, TableColumn} from '../../table-types';
import {TableRow} from './table-row';

const testRecord: DataRowType = {
  firstField: 'some',
  secondField: 'value'
}

const testColumns: TableColumn[] = [
  {
    dataKey: 'firstField',
  },
  {
    dataKey: 'secondField',
  },
]

test('table-row renders children correctly', () => {
  render(
    <table>
      <tbody>
        <TableRow
          rowData={testRecord}
          columns={testColumns}
          index={0}
        />
      </tbody>
    </table>
  );

  const rowElement = screen.getByRole('row');
  expect(rowElement).toBeInTheDocument();

  const cellElements = screen.getAllByRole('cell');

  expect(cellElements.length).toBe(testColumns.length);
  expect(cellElements[0]).toHaveTextContent(/some/i);
  expect(cellElements[1]).toHaveTextContent(/value/i);
})
