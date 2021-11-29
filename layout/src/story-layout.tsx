import React from 'react';
import { ThemeProvider } from '../../theme-provider';
import { themeList, Themes } from '../../theme-list/themeList';

export const StoryLayout = {
  decorators: [
    (Story) => (
      <ThemeProvider initialTheme={themeList[Themes.Light]}>
        <div style={{ padding: '1rem' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  parameters: { layout: 'centered' },
};
