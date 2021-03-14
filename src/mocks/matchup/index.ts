import {css} from '@emotion/css';
import matchupData from './matchup.json';
import {
  createPrefixFormatter,
  indexFormatter,
  numberSeparatorFormatter,
  percentFormatter,
  positiveNegativeFormatter,
  statisticsFormatter
} from '../../components/table';

export const getMatchupData = () => matchupData;

export const getMatchupColumns = () => [
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
    formatter: createPrefixFormatter('vs')
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
    dataKey: 'xpd',
    title: 'XPD@15',
    formatter: positiveNegativeFormatter,
  },
  {
    dataKey: 'goldDifference',
    title: 'GD@15',
    formatter: positiveNegativeFormatter,
  },
  {
    dataKey: 'csd',
    title: 'CSD@15',
    formatter: positiveNegativeFormatter,
  },
  {
    dataKey: 'xpm',
    title: 'XP/M',
    formatter: numberSeparatorFormatter,
  },
];
