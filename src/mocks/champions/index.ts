import championsData from './champions.json';
import {TableColumn} from '../../components/table';

export const getChampionsData = () => championsData;

export const getChampionsColumns = (): TableColumn[] => [
  {
    dataKey: 'name',
    title: 'Champion'
  },
  {
    dataKey: 'role',
    title: 'Role'
  }
]
