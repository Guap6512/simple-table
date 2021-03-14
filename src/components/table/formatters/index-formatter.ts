import {DataRowType, DataValueType} from '../table-types';

export const indexFormatter = (value: DataValueType, record: DataRowType, index: number) => (
  `${index + 1}`
);
