import React from 'react';
import {render, screen} from '@testing-library/react';
import {TableHead} from './table-head';
import {TableColumn} from '../../table-types';
import {css} from '@emotion/css';

const testColumn: TableColumn = {
  dataKey: 'nope',
  title: 'Test title',
  width: 100,
}

const testColumnWithStyles: TableColumn = {
  ...testColumn,
  headClassName: css`
    background-color: blue;
  `,
}


test('table-head renders correctly', () => {
  render(
    <table>
      <thead>
      <tr>
        <TableHead column={testColumn} />
      </tr>
      </thead>
    </table>
  );
  const headElement = screen.getByRole('columnheader');

  expect(headElement).toBeInTheDocument();
  expect(headElement).toHaveTextContent(testColumn.title as string);
  expect(headElement).toHaveStyle('width: 100px;')
});

test('table-head uses styles for column head', () => {
  render(
    <table>
      <thead>
      <tr>
        <TableHead column={testColumnWithStyles} />
      </tr>
      </thead>
    </table>
  );
  const headElement = screen.getByRole('columnheader');

  expect(headElement).toHaveStyle('width: 100px;');
  expect(headElement).toHaveStyle('background-color: blue;');
})
