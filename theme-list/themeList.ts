import { ThemeList } from './types/themeList';
import { darkBaseTheme, lightBaseTheme } from '../theme';
import { ThemeBase } from '../theme';

export const themeList: ThemeList = {
  [ThemeBase.Light]: lightBaseTheme,
  [ThemeBase.Dark]: darkBaseTheme,
};
