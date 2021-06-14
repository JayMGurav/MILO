import React from 'react';
import GloBalStyles from '../styles/GlobalStyles';
import StoryBookPreviewThemeModeButton from './theme/ModeButton';
import ThemeProvider from './theme/themeContext';

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <GloBalStyles />
      <StoryBookPreviewThemeModeButton />
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
