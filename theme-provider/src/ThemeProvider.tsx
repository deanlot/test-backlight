import React, { createContext, PropsWithChildren, useContext, useMemo, useState } from 'react';
import '../../layout/src/fonts.css';
import { ThemeContextConfig } from './types/themeContextConfig';
import { themeList } from '../../theme-list';
import { createStitches } from '@stitches/react';
import { ThemeBase } from '../../theme';
import { WhiteLabelColors } from './types/whiteLabelColors';
import { composeTheme } from './utils/composeTheme';

const ThemeContext = createContext<ThemeContextConfig>({
  setTheme: () => null,
  theme: themeList[ThemeBase.Light],
  themeBase: ThemeBase.Light,
});

const { createTheme } = createStitches({
  theme: {},
});

export const ThemeProvider = ({
  initialColors,
  initialThemeBase = ThemeBase.Light,
  children,
}: PropsWithChildren<{ initialColors?: WhiteLabelColors; initialThemeBase?: ThemeBase }>) => {
  // TODO: Console warn if initial theme changes

  const [themeBase, setThemeBase] = useState<ThemeBase>(initialThemeBase);
  const [colors, setColors] = useState<WhiteLabelColors>(initialColors);

  const composedTheme = composeTheme(themeBase, colors);

  const state: ThemeContextConfig = useMemo(
    () => ({
      setTheme: (themeBase: ThemeBase, colors: WhiteLabelColors) => {
        setThemeBase(themeBase);
        setColors(colors);
      },
      theme: composedTheme,
      themeBase,
    }),
    [composedTheme, themeBase]
  );

  const stitchesTheme = useMemo(() => createTheme(composedTheme), [composedTheme]);

  return (
    <ThemeContext.Provider value={state}>
      <div className={stitchesTheme.className}>{children}</div>
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextConfig => useContext(ThemeContext);
