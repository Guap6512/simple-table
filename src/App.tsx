import React from 'react';
import {css, Global} from '@emotion/react';

export function App() {
  return (
    <div className="app">
      <Global
        styles={css`
        * {
          box-sizing: border-box;
        }
        
        body {
          margin: 0;
        }
        `}
      />
    </div>
  );
}
