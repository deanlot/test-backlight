import { themeDark, themeLight } from '../../theme';
import { ThemeMode } from '../types/themeMode';
import { systemUIDarkTheme, systemUILightTheme } from '../../theme/src/theme';
import { ThemeList } from '../types/themeListItem';

export const themeList: ThemeList = {
  [ThemeMode.Light]: {
    themeName: ThemeMode.Light,
    theme: systemUILightTheme,
    className: themeLight.className,
  },
  [ThemeMode.Dark]: {
    themeName: ThemeMode.Dark,
    theme: systemUIDarkTheme,
    className: themeDark.className,
  },
};
