import {
  COLORS,
  COLOR_MODE_KEY,
  INITIAL_COLOR_MODE_CSS_PROPERTY,
} from './themeConfig.js';
import { createContext, useEffect, useMemo, useState } from 'react';

type ColorMode = 'dark' | 'light';

export const ThemeContext = createContext<{
  colorMode?: ColorMode;
  changeColorMode?: (mode: ColorMode) => void;
}>({});

function ThemeProvider(props) {
  const [colorMode, setColorMode] = useState<ColorMode | null>(null);

  useEffect(() => {
    const root = window.document.documentElement;

    const initiallySetColorMode: ColorMode = root.style.getPropertyValue(
      INITIAL_COLOR_MODE_CSS_PROPERTY
    ) as ColorMode;

    setColorMode(initiallySetColorMode);
  }, []);

  function themeContextValue() {
    function setColors(mode: ColorMode) {
      console.log(mode);
      const root = window.document.documentElement;
      window.localStorage.setItem(COLOR_MODE_KEY, mode);
      Object.entries(COLORS).forEach(([value, colorByMode]) => {
        const cssVarName = `--color-${value}`;

        root.style.setProperty(cssVarName, colorByMode[mode]);
        setColorMode(mode);
      });
    }

    return { colorMode, changeColorMode: setColors };
  }

  const memorizedThemeContextValue = useMemo(themeContextValue, [
    colorMode,
    themeContextValue,
  ]);

  return (
    <ThemeContext.Provider value={memorizedThemeContextValue}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
