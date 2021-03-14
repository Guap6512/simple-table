import {DataValueType} from '../table-types';

export const positiveNegativeFormatter = (value: DataValueType) => {
  if (typeof value !== 'number') {
    console.warn(`Positive/Negative formatter can only be used on numbers, attempted to use on ${typeof value}!`)

    return value;
  }

  return `${value > 0 ? '+' : ''}${value}`;
}
