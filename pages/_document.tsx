import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

import {
  COLORS,
  COLOR_MODE_KEY,
  INITIAL_COLOR_MODE_CSS_PROPERTY,
} from '@/styles/themeConfig';
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

const minifiedCorrectedSetColorByTheme = () => {
  const corrected = String(setColorByTheme)
    .replace("'🌈'", JSON.stringify(COLORS))
    .replace('🔑', COLOR_MODE_KEY)
    .replace('🏺', INITIAL_COLOR_MODE_CSS_PROPERTY);

  const called = `(${corrected})()`;

  return called;
};

class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <script
            dangerouslySetInnerHTML={{
              __html: minifiedCorrectedSetColorByTheme(),
            }}></script>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
