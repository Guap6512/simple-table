import React from 'react';
import {css, cx} from '@emotion/css';
import {DataRowType} from '../../table-types';
import {TableCellProps} from './table-cell-types';
import {convertToCssUnit} from '../../../../utils';

export const TableCell = <T extends DataRowType>({
  record,
  column,
  rowIndex,
}: TableCellProps<T>) => {
  const {
    formatter,
    width,
    dataKey,
    className,
  } = column;

  const cellValue = formatter
    ? formatter(record[dataKey], record, rowIndex)
    : record[dataKey];

  return (
    <td
      className={cx(
        css`
          width: ${convertToCssUnit(width)};
          text-align: center;
        `,
        className,
      )}
    >
      {cellValue}
    </td>
  )
};
