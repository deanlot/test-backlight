import React, { FC, ReactElement } from 'react';
import { useTheme } from '../theme-provider';
import { ActiveTab, Tab, TabBar, ThemePanelContainer } from './ThemePanel.styles';
import { themeList } from '../theme-list/themeList';

const ThemePanel: FC = ({ children }): ReactElement => {
  const { theme, setTheme } = useTheme();

  return (
    <ThemePanelContainer>
      <TabBar>
        {Object.keys(themeList).map((key) =>
          theme === themeList[key] ? (
            <ActiveTab>{key}</ActiveTab>
          ) : (
            <Tab onClick={() => setTheme(themeList[key])}>{key}</Tab>
          )
        )}
      </TabBar>
      {children}
    </ThemePanelContainer>
  );
};

export default ThemePanel;
