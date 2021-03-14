import {TableColumn} from '../../table-types';

export interface TableCellProps<T> {
  record: T;
  column: TableColumn;
  rowIndex: number;
}
