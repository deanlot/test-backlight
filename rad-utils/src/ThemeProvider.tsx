import React from 'react';
import { createContext, FC, useContext, useState } from 'react'
import '../../layout/src/fonts.css'
import { themeDark, themeLight } from '../../theme';

export enum Theme {
  Light = 'Light',
  Dark = 'Dark',
}

type Themes = {
  [key in Theme]: unknown;
};

const themesConversion: Themes = {
  Light: themeLight,
  Dark: themeDark
};

type ThemeCtxConfig = {
  setTheme: (theme: Theme) => void;
  theme: unknown;
};

const initialState = {
  setTheme: () => null,
  theme: themesConversion[Theme.Light]
};

const ThemeCtx = createContext<ThemeCtxConfig>(initialState);

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(Theme.Light);

  const value = {
    setTheme: setTheme,
    theme: themesConversion[theme]
  };

  return <ThemeCtx.Provider value={value}>
    <div className={themesConversion[theme]}>{children}</div>
  </ThemeCtx.Provider>;
};

export const useTheme = (): ThemeCtxConfig => useContext(ThemeCtx);
