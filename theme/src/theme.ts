import { colorsLight } from './colorsLight';
import { colorsDark } from './colorsDark';
import { fonts } from './fonts';
import { fontSizes } from './fontSizes';
import { fontWeights } from './fontWeights';
import { lineHeights } from './lineHeights';
import { letterSpacings } from './letterSpacings';
import { space } from './space';
import { radii } from './radii';
import { borderWidths } from './borderWidths';
import { createStitches } from '@stitches/react';
import { ConfigType } from '@stitches/react/types/config';

// Stitches takes an input object in the SystemUI standard format.
// It returns an object in a slightly different format.
// The systemUILightTheme and systemUIDarkTheme are used to feed the documentation components.
export const systemUILightTheme: ConfigType.Theme = {
  colors: colorsLight,
  space,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  radii,
  borderWidths,
};

export const systemUIDarkTheme: ConfigType.Theme = {
  ...systemUILightTheme,
  colors: colorsDark,
};

const { createTheme } = createStitches({
  theme: {},
});

export const themeLight = createTheme(systemUILightTheme);

export const themeDark = createTheme(systemUIDarkTheme);
