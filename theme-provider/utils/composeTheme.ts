import { WhiteLabelColors } from '../types/whiteLabelColors';
import { ThemeBase } from '../../theme';
import { ConfigType } from '@stitches/react/types/config';
import { themeList } from '../../theme-list';

// Composing a theme requires mering a customer's colors (WhiteLabelColors) over top of
// a specific base theme (light/dark). However we expect a much smaller list of colors from the customer
// and do not expect to give them our entire set of tokens so it isn't a simple merge. Instead
// as we merge we will map their inputs to our tokens, comping the final theme.
export const composeTheme = (themeBase: ThemeBase, colors: WhiteLabelColors = {}): ConfigType.Theme => ({
  ...themeList[themeBase],
  colors: {
    ...themeList[themeBase].colors,
    ...(colors?.background && { 'surface-primary': colors.background }), // TODO: This is an example only!
    ...(colors?.text && { 'onSurface-borderPrimary': colors.text }), // TODO: This is an example only!
  },
});
