import {DataValueType} from '../components/table/table-types';

export type Statistics = {
  kills: number;
  deaths: number;
  all: number;
}

export const isStatistics = (value: DataValueType): value is Statistics => {
  if (typeof value !== 'object') {
    return false;
  }

  return ("kills" in value && "deaths" in value && "all" in value);
}
