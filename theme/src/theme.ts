import { colorsLight } from './colorsLight';
import { fonts } from './fonts';
import { fontSizes } from './fontSizes';
import { fontWeights } from './fontWeights';
import { lineHeights } from './lineHeights';
import { letterSpacings } from './letterSpacings';
import { space } from './space';
import { radii } from './radii';
import { colorsDark } from './colorsDark';

const baseTheme = {
  space,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  radii
}

export const themeLight = {
  ...baseTheme,
  colors: colorsLight,
}

export const themeDark = {
  ...baseTheme,
  colors: colorsDark
}