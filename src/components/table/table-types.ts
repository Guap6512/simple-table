import {ReactNode} from 'react';

export interface TableProps<T> {
  columns: TableColumn[];
  data: T[];
  rowKey: string;
}

export interface TableColumn {
  dataKey: string;
  title?: string;
  width?: string|number;
  className?: string;
  headClassName?: string;
  formatter?: (value: DataValueType, record: DataRowType, index: number) => ReactNode;
}

export type DataValueType = string|number|object;

export type DataRowType = Record<string, DataValueType>;
