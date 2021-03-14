import React from 'react';
import {cx, css} from '@emotion/css';
import {TableHeadProps} from './table-head-types';
import {convertToCssUnit} from '../../../../utils';

export const TableHead = ({
  column,
}: TableHeadProps): JSX.Element => (
  <th
    className={cx(
      css`
        width: ${convertToCssUnit(column.width)};
      `,
      column.headClassName
    )}
  >
    {column.title}
  </th>
)
