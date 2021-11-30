import { WhiteLabelColors } from '../types/whiteLabelColors';
import { ThemeBase } from '../../theme';
import { ConfigType } from '@stitches/react/types/config';
import { themeList } from '../../theme-list';

export const composeTheme = (themeBase: ThemeBase, colors: WhiteLabelColors = {}): ConfigType.Theme => ({
  ...themeList[themeBase],
  colors: {
    ...themeList[themeBase].colors,
    ...(colors?.background && { 'surface-primary': colors.background }),
    ...(colors?.text && { 'onSurface-borderPrimary': colors.text }),
  },
});
