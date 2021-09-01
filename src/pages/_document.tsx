import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import Terser from 'terser';
import { ServerStyleSheet } from 'styled-components';

import {
  COLORS,
  COLOR_MODE_KEY,
  INITIAL_COLOR_MODE_CSS_PROPERTY,
} from '@/styles/colorThemeConfig';
/**
 * COLORS = theme colors
 * COLOR_MODE = Key for localstorage
 * "INITIAL_COLOR_MODE_CSS_PROPERTY" property for colorMode
 */

function setColorByTheme() {
  const COLORS = '🌈';
  const COLOR_MODE_KEY = '🔑';
  const INITIAL_COLOR_MODE_CSS_PROPERTY = '🏺';

  const prefersDarkModeFromMediaQuery = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;
  const userPersistedPreference = window.localStorage.getItem(COLOR_MODE_KEY);
  let colorMode = 'light';
  const userHasUsedToggle = typeof userPersistedPreference === 'string';
  if (userHasUsedToggle) {
    colorMode = userPersistedPreference;
  } else {
    colorMode = prefersDarkModeFromMediaQuery ? 'dark' : 'light';
    window.localStorage.setItem(COLOR_MODE_KEY, colorMode);
  }
  const root = document.documentElement;
  root.style.setProperty(INITIAL_COLOR_MODE_CSS_PROPERTY, colorMode);

  Object.entries(COLORS).forEach(([value, colorByTheme]) => {
    const cssVarName = `--color-${value}`;

    root.style.setProperty(cssVarName, colorByTheme[colorMode]);
  });
}

const MinifiedCorrectedSetColorByTheme = () => {
  const corrected = String(setColorByTheme)
    .replace("'🌈'", JSON.stringify(COLORS))
    .replace('🔑', COLOR_MODE_KEY)
    .replace('🏺', INITIAL_COLOR_MODE_CSS_PROPERTY);

  let calledFunction = `(${corrected})()`;
  calledFunction = Terser.minify(calledFunction).code;
  return <script dangerouslySetInnerHTML={{ __html: calledFunction }} />;
};

export function FallbackStyles() {
  const cssVariableString = Object.entries(COLORS).reduce(
    (acc, [name, colorByTheme]) => {
      return `${acc}\n--color-${name}: ${colorByTheme.dark};`;
    },
    ''
  );

  const wrappedInSelector = `html { ${cssVariableString} }`;

  return <style>{wrappedInSelector}</style>;
}

class MyDocument extends NextDocument {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
          enhanceComponent: (Component) => Component,
        });

      // Run the parent `getInitialProps`, it now includes the custom `renderPage`
      const initialProps = await NextDocument.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <FallbackStyles />
        </Head>
        <body>
          <MinifiedCorrectedSetColorByTheme />
          <Main />
          <NextScript />
          <div id="modalMountPoint" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
