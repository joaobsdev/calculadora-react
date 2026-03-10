import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  }

  body {
    width: 100%;
    height: 100vh;
    background-color:#1a1a1a;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #root {
    width: 100%;
  }
`;

export default GlobalStyle;