import { createGlobalStyle } from 'styled-components';

const GloBalStyles = createGlobalStyle`
  body {
    width: 100%;
    margin: 0;
    padding:0;
    box-sizing: border-box;
    font-family: "Avenir", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: #eee;
    background: var(--color-background);
    color: var(--color-text);
  }
  *+*{
    box-sizing: border-box;
  }
`;

export default GloBalStyles;
