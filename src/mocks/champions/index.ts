import {css} from '@emotion/css';
import championsData from './champions.json';
import {
  indexFormatter,
  percentFormatter,
  positiveNegativeFormatter,
  statisticsFormatter,
  TableColumn,
} from '../../components/table';

export const getChampionsData = () => championsData;

export const getChampionsColumns = (): TableColumn[] => [
  {
    dataKey: 'index',
    title: '#',
    formatter: indexFormatter,
  },
  {
    dataKey: 'name',
    title: 'Champion',
    width: 200,
    className: css`
      text-align: left;
    `,
  },
  {
    dataKey: 'role',
    title: 'Role'
  },
  {
    dataKey: 'games',
    title: 'Games'
  },
  {
    dataKey: 'winRate',
    title: 'WR',
    formatter: percentFormatter,
  },
  {
    dataKey: 'statistics',
    title: 'KDA',
    formatter: statisticsFormatter,
  },
  {
    dataKey: 'csm',
    title: 'CS/M',
  },
  {
    dataKey: 'goldDifference',
    title: 'GD@15',
    formatter: positiveNegativeFormatter,
  },
  {
    dataKey: 'damagePerMinute',
    title: 'DPM',
  },
  {
    dataKey: 'killParticipation',
    title: 'KP',
    formatter: percentFormatter,
  }
]
