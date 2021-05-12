import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle `
  * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  }

  html,
  body {
    padding: 0;
    margin: 0;
  }
  
  a, h1, h2, h3, h4, h5, li, ul, p  {
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
}
`;







