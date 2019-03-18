import React from 'react';
import { createGlobalStyle } from 'styled-components';

import UpdateApp from './components/UpdateApp';
import Router from './Router';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    background: #ffbbca;
    font-family: 'ZCOOL XiaoWei', serif;
    font-display: swap;
    -webkit-font-smoothing: antialiased;
  }
  a {
    text-decoration: none;
  }
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    list-style-type: none;
  }
`;

export default function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Router />
      <UpdateApp />
    </React.Fragment>
  );
}
