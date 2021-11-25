import React from 'react';
import { ThemeProvider } from '../../theme-provider/context/ThemeProvider';

export const layout = {
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: { layout: 'centered' },
};
