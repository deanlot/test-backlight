import React, { PropsWithChildren, useMemo, useState } from 'react';
import { createContext, useContext } from 'react';
import '../../layout/src/fonts.css';
import { ThemeContextConfig } from '../types/themeContextConfig';
import { themeList, Themes } from '../../theme-list/themeList';
import { ConfigType } from '@stitches/react/types/config';
import { createStitches } from '@stitches/react';

const ThemeContext = createContext<ThemeContextConfig>({
  setTheme: () => null,
  theme: themeList[Themes.Light],
});

const { createTheme } = createStitches({
  theme: {},
});

export const ThemeProvider = ({ initialTheme, children }: PropsWithChildren<{ initialTheme: ConfigType.Theme }>) => {
  // Console warn if initial theme changes

  const [theme, setTheme] = useState<ConfigType.Theme>(initialTheme);

  const state: ThemeContextConfig = useMemo(
    () => ({
      setTheme,
      theme,
    }),
    [theme]
  );

  const stitchesTheme = useMemo(() => createTheme(theme), [theme]);

  return (
    <ThemeContext.Provider value={state}>
      <div className={stitchesTheme.className}>{children}</div>
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextConfig => useContext(ThemeContext);
