import React from 'react';
import { themeList } from '~/theme/src/themeList';
import { ThemeProvider } from '../../theme-provider';
import { Themes } from '../../theme-list/themeList';

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
