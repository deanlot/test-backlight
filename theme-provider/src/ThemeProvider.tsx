import React, { createContext, PropsWithChildren, useContext, useMemo, useState } from 'react';
import '../../css/src/bench-design-system.css';
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
  themeClass: undefined,
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

  const stitchesTheme = useMemo(() => createTheme(composedTheme), [composedTheme]);

  const { className } = stitchesTheme;

  const state: ThemeContextConfig = useMemo(
    () => ({
      setTheme: (themeBase: ThemeBase, colors: WhiteLabelColors) => {
        setThemeBase(themeBase);
        setColors(colors);
      },
      theme: composedTheme,
      themeBase,
      themeClass: className,
    }),
    [composedTheme, themeBase]
  );

  return (
    <ThemeContext.Provider value={state}>
      <div className={className}>{children}</div>
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextConfig => useContext(ThemeContext);
