import {TableColumn} from '../../table-types';

export interface TableRowProps<T> {
  rowData: T;
  columns: TableColumn[];
  index: number;
}
