import { colors } from './colors';
import { fonts } from './fonts';
import { fontSizes } from './fontSizes';
import { fontWeights } from './fontWeights';
import { lineHeights } from './lineHeights';
import { letterSpacings } from './letterSpacings';
import { space } from './space';
import { radii } from './radii';
import { borderWidths } from './borderWidths';
import { ConfigType } from '@stitches/react/types/config';

// Stitches takes an input object in the SystemUI standard format.
// It returns an object in a slightly different format.
export const baseTheme: ConfigType.Theme = {
  colors,
  space,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  radii,
  borderWidths,
};
