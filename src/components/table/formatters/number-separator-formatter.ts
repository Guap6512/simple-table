import {DataValueType} from '../table-types';

const formatterRegex = /\B(?=(\d{3})+(?!\d))/g;

export const numberSeparatorFormatter = (value: DataValueType) => {
  if (typeof value !== 'number' && typeof value !== 'string') {
    console.warn(`Number separator formatter can only be used on numbers or strings,
      attempted to use on ${typeof value}!`)

    return value;
  }

  const valueString = typeof value === 'string' ? value : value.toString();

  return valueString.replace(formatterRegex, ',');
}
