import { createGlobalStyle } from 'styled-components';
import rootThemeConfigs from './rootThemeConfigs';

const GloBalStyles = createGlobalStyle`
  ${rootThemeConfigs}

  html,body {
    width: 100%;
    margin: 0;
    padding:0;
    box-sizing: border-box;
    font-family: "Avenir", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    background: var(--color-background);
    color: var(--color-text);
  }
  *+*{
    box-sizing: border-box;
  }
  pre, code {
    font-family: var(--system-fonts-mono);
  }
`;

export default GloBalStyles;
