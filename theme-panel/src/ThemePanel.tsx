import React, { FC, ReactElement } from 'react';
import { useTheme } from '../../theme-provider';
import { ActiveTab, Tab, TabBar, ThemePanelContainer } from './ThemePanel.styles';
import { themeList } from '../../theme-list';
import { ThemeBase } from '../../theme';

const ThemePanel: FC = ({ children }): ReactElement => {
  const { themeBase: currentThemeBase, setTheme } = useTheme();

  return (
    <ThemePanelContainer>
      <TabBar>
        {Object.keys(themeList).map((themeBase) =>
          currentThemeBase === themeBase ? (
            <ActiveTab key={themeBase}>{themeBase}</ActiveTab>
          ) : (
            <Tab key={themeBase} onClick={() => setTheme(themeBase as ThemeBase)}>
              {themeBase}
            </Tab>
          )
        )}
      </TabBar>
      {children}
    </ThemePanelContainer>
  );
};

export default ThemePanel;
