import { ThemeList } from './types/themeList';
import { BenchDark } from './themes/bench-dark';
import { BenchLight } from './themes/bench-light';

export enum Themes {
  Light = 'Light',
  Dark = 'Dark',
}

export const themeList: ThemeList = {
  [Themes.Light]: BenchLight,
  [Themes.Dark]: BenchDark,
};
