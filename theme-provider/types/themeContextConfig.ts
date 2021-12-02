import { ConfigType } from '@stitches/react/types/config';
import { ThemeBase } from '../../theme';
import { WhiteLabelColors } from './whiteLabelColors';

export type ThemeContextConfig = {
  setTheme: (themeBase: ThemeBase, colors?: WhiteLabelColors) => void;
  theme: ConfigType.Theme;
  themeBase: ThemeBase;
  getCssText: () => string;
};
