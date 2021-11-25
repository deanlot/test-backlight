import React from 'react';
import { createContext, FC, useContext, useState } from 'react';
import '../../layout/src/fonts.css';
import { ThemeMode } from '../types/themeMode';
import { ThemeContextConfig } from '../types/themeContextConfig';
import { themeList } from '../utils/themeList';

const ThemeContext = createContext<ThemeContextConfig>({
  setThemeMode: () => null,
  theme: themeList[ThemeMode.Light].theme,
  themeName: ThemeMode.Light,
});

export const ThemeProvider: FC = ({ children }) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(ThemeMode.Light);

  const state: ThemeContextConfig = {
    setThemeMode,
    theme: themeList[themeMode].theme,
    themeName: themeList[themeMode].themeName,
  };

  return (
    <ThemeContext.Provider value={state}>
      <div className={themeList[themeMode].className}>{children}</div>
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextConfig => useContext(ThemeContext);
