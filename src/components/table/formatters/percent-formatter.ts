import {DataValueType} from '../table-types';

export const percentFormatter = (
  value: DataValueType,
) => {
  if (typeof value !== 'number') {
    console.warn(`Percent formatter can only be used on numbers, attempted to use on ${typeof value}!`)

    return value;
  }
  return `${((value as number) * 100).toFixed(1)}%`;
};
