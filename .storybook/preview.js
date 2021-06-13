import React from 'react';
import GloBalStyles from '../styles/GlobalStyles';
import ThemeProvider from '../context/themeContext';

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <GloBalStyles />
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
