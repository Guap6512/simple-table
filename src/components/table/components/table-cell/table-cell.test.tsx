import React from 'react';
import {render, screen} from '@testing-library/react';
import {TableCell} from './table-cell';
import {DataRowType, TableColumn} from '../../table-types';
import {css} from '@emotion/css';

const testRecord: DataRowType = {
  field: 'value',
}

const testColumn: TableColumn = {
  dataKey: 'field',
  width: 100,
}

const testColumnWithFormatter: TableColumn = {
  ...testColumn,
  formatter: () => 'formatted',
}

const testColumnWithStyles: TableColumn = {
  ...testColumn,
  className: css`
    background-color: blue;
  `,
}

test('table-cell renders correctly', () => {
  render(
    <table>
      <tbody>
        <tr>
        <TableCell
          record={testRecord}
          column={testColumn}
          rowIndex={0} />
        </tr>
      </tbody>
    </table>
  );

  const cellElement = screen.getByRole('cell');

  expect(cellElement).toBeInTheDocument();
  expect(cellElement).toHaveTextContent(testRecord[testColumn.dataKey] as string);
  expect(cellElement).toHaveStyle('width: 100px;');
});

test('table-cell uses formatter', () => {
  render(
    <table>
      <tbody>
      <tr>
        <TableCell
          record={testRecord}
          column={testColumnWithFormatter}
          rowIndex={0} />
      </tr>
      </tbody>
    </table>
  );

  const cellElement = screen.getByRole('cell');

  expect(cellElement).toBeInTheDocument();
  expect(cellElement).toHaveTextContent(testColumnWithFormatter?.formatter?.(
    testRecord[testColumn.dataKey],
    testRecord,
    0
  ) as string);
});

test('table-cell applies styles from className', () => {
  render(
    <table>
      <tbody>
      <tr>
        <TableCell
          record={testRecord}
          column={testColumnWithStyles}
          rowIndex={0} />
      </tr>
      </tbody>
    </table>
  );

  const cellElement = screen.getByRole('cell');

  expect(cellElement).toBeInTheDocument();
  expect(cellElement).toHaveStyle('background-color: blue;');
  expect(cellElement).toHaveStyle('width: 100px;');
});
