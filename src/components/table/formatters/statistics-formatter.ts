import {DataValueType} from '../table-types';
import {isStatistics} from '../../../types/statistics';

export const statisticsFormatter = (value: DataValueType) => {
  if (!isStatistics(value)) {
    console.warn(`KDA formatter can only be used on Statistics object, attempted to use on ${typeof value}!`)

    return value;
  }

  return `${value.kills} / ${value.deaths} / ${value.all}`;
}
