import { colorsLight } from './colorsLight';
import { colorsDark } from './colorsDark';
import { fonts } from './fonts';
import { fontSizes } from './fontSizes';
import { fontWeights } from './fontWeights';
import { lineHeights } from './lineHeights';
import { letterSpacings } from './letterSpacings';
import { space } from './space';
import { radii } from './radii';
import { createStitches } from '@stitches/react';

const { createTheme } = createStitches({
  theme: {
    space,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    letterSpacings,
    radii
  }
})

export const themeLight = createTheme({
  colors: colorsLight,
})

export const themeDark = createTheme({
  colors: colorsDark
})