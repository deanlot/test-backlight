import React from 'react';
import { ThemeProvider } from '../../theme-provider';

export const StoryLayout = {
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div style={{ padding: '1rem' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  parameters: { layout: 'centered' },
};
