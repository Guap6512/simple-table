import React from 'react';
import {css, injectGlobal} from '@emotion/css';
import {Table} from './components/table';
import {getChampionsColumns, getChampionsData} from './mocks/champions';
import {getMatchupColumns, getMatchupData} from './mocks/matchup';

injectGlobal`
  * {
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
  }
          
  body {
    margin: 0;
  }
`;

export function App() {
  return (
    <div className={css`
      display: flex;
      flex-direction: column;
      align-items: center;
    `}>
      <h3>Champions Pool</h3>
      <Table
        rowKey="name"
        columns={getChampionsColumns()}
        data={getChampionsData()}
      />
      <h3>Matchup Pool</h3>
      <Table
        rowKey="name"
        columns={getMatchupColumns()}
        data={getMatchupData()}
      />
    </div>
  );
}
