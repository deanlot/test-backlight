import { ConfigType } from '@stitches/react/types/config';

export type ThemeContextConfig = {
  setTheme: (theme: ConfigType.Theme) => void;
  theme: ConfigType.Theme;
};
