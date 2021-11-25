import React from 'react';
import { MdxLayout } from '~/layout';
import { ThemeProvider } from '../../utils/src/ThemeProvider';

export const MdxButtonLayout = (props) => (
  <ThemeProvider>
    <MdxLayout {...props} />
  </ThemeProvider>
);
