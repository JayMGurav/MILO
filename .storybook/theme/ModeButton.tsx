import { useContext } from 'react';
import { ThemeContext } from './themeContext';

import styled from '@emotion/styled';

const Button = styled.button`
  color: var(--color-background);
  background-color: var(--color-text);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  position: absolute;
  top: 20px;
  right: 20px;
  border: none;
`;

function StoryBookPreviewThemeModeButton() {
  const { colorMode: mode, changeColorMode: setMode } =
    useContext(ThemeContext);
  return (
    <Button onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}>
      {mode === 'dark' ? 'light' : 'dark'}
    </Button>
  );
}

export default StoryBookPreviewThemeModeButton;
