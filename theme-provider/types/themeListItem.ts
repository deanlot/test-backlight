import { ConfigType } from '@stitches/react/types/config';

export type ThemeListItem = {
  themeName: string;
  theme: ConfigType.Theme;
  className: string;
};

export type ThemeList = {
  [key: string]: ThemeListItem;
};
