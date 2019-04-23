import React from 'react';
import { createGlobalStyle } from 'styled-components';

import { ContextProvider } from './context';
import UpdateApp from './components/UpdateApp';
import Router from './Router';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    background: #f9f9fa;
    font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
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
    <ContextProvider>
      <GlobalStyle />
      <Router />
      <UpdateApp />
    </ContextProvider>
  );
}
