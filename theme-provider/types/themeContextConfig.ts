import { ThemeMode } from './themeMode';
import { ConfigType } from '@stitches/react/types/config';

export type ThemeContextConfig = {
  setThemeMode: (themeMode: ThemeMode) => void;
  theme: ConfigType.Theme;
  themeName: string;
};
