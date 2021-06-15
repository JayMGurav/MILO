import {
  COLORS,
  COLOR_MODE_KEY,
  INITIAL_COLOR_MODE_CSS_PROPERTY,
} from './colorThemeConfig.js';

(async function setColorByTheme() {
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
})();
