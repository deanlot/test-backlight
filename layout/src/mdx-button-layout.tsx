import React from 'react';
import { MdxLayout } from '~/layout';
import { ThemeProvider } from '../../theme-provider/context/ThemeProvider';

export const MdxButtonLayout = (props) => (
  <ThemeProvider>
    <MdxLayout {...props} />
  </ThemeProvider>
);
