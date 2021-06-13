import { ThemeContext } from '@/context/themeContext';
import { useContext } from 'react';

import {
  ModeSwitchPropsType,
  SpringTransitionType,
} from './ThemeModeSwitch.types';
import { ModeButton, ModeButtonDiv } from './ThemeModeSwitch.styles';

export function ModeSwitch({
  springTransition,
  label,
  changeMode,
  isDarkMode,
}: ModeSwitchPropsType) {
  return (
    <ModeButtonDiv isDarkMode={isDarkMode}>
      <ModeButton
        onClick={() => void changeMode()}
        layout
        transition={springTransition}>
        {label}
      </ModeButton>
    </ModeButtonDiv>
  );
}

function ThemeModeSwitch() {
  const { colorMode: mode, changeColorMode: setMode } =
    useContext(ThemeContext);

  const changeMode = (): void => {
    const changeTO = mode === 'dark' ? 'light' : 'dark';
    setMode(changeTO);
  };

  const spring: SpringTransitionType = {
    type: 'spring',
    stiffness: 700,
    damping: 20,
  };

  return (
    <ModeSwitch
      springTransition={spring}
      label={mode === 'dark' ? '🌞' : '🌜'}
      changeMode={changeMode}
      isDarkMode={mode === 'dark' ? true : false}
    />
  );
}

export default ThemeModeSwitch;
