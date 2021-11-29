import React, { FC, ReactElement } from 'react';
import { useTheme } from '../theme-provider';
import { ActiveTab, Tab, TabBar, ThemePanelContainer } from './ThemePanel.styles';
import { themeList } from '../theme-list/themeList';

const ThemePanel: FC = ({ children }): ReactElement => {
  const { theme: currentTheme, setTheme } = useTheme();

  return (
    <ThemePanelContainer>
      <TabBar>
        {Object.entries(themeList).map(([themeName, theme]) =>
          currentTheme === theme ? (
            <ActiveTab>{themeName}</ActiveTab>
          ) : (
            <Tab onClick={() => setTheme(theme)}>{themeName}</Tab>
          )
        )}
      </TabBar>
      {children}
    </ThemePanelContainer>
  );
};

export default ThemePanel;
