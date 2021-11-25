import React from 'react';
import { ThemeProvider } from './ThemeProvider';

export const layout = {
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    )
  ],
  parameters: { layout: 'centered' }
};