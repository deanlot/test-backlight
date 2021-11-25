import React, { FC, ReactElement } from 'react';
import { ThemeMode, useTheme } from '../theme-provider';
import { ActiveTab, Tab, TabBar, ThemePanelContainer } from './ThemePanel.styles';
import { themeList } from '../theme-provider/utils/themeList';

const ThemePanel: FC = ({ children }): ReactElement => {
  const { themeName, setThemeMode } = useTheme();

  return (
    <ThemePanelContainer>
      <TabBar>
        {Object.keys(themeList).map((key) =>
          key === themeName ? (
            <ActiveTab>{key}</ActiveTab>
          ) : (
            <Tab onClick={() => setThemeMode(ThemeMode[key])}>{key}</Tab>
          )
        )}
      </TabBar>
      {children}
    </ThemePanelContainer>
  );
};

export default ThemePanel;
