import { systemUIDarkTheme, systemUILightTheme } from '../theme/src/theme';
import { ThemeList } from './types/themeList';

export enum Themes {
  Light = 'Light',
  Dark = 'Dark',
}

export const themeList: ThemeList = {
  [Themes.Light]: systemUILightTheme,
  [Themes.Dark]: systemUIDarkTheme,
};
