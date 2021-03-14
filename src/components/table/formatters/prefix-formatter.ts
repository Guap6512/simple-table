import {DataValueType} from '../table-types';

export const createPrefixFormatter = (prefix: string) => (value: DataValueType) => {
  return `${prefix} ${value}`;
}
