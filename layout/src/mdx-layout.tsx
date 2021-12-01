import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { CoreLayout } from '@divriots/dockit-react/mdx-layout-core';
import { ThemeProvider } from '../../theme-provider';
import { BENCH_LOGO } from './bench-logo';

export const MdxLayout = ({ components = {}, __context, ...rest }) => (
  <ThemeProvider>
    <MDXProvider components={{ ...components }}>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css/out/light.min.css" />
      <CoreLayout
        logo={<img src={BENCH_LOGO} width="180px" />}
        // Hack the left-menu generation.
        // Remove the theme page and replace it with individual pages for each part of the theme.
        __context={{
          ...__context,
          pages: [
            ...__context.pages.filter(({ nav }) => nav.key !== 'theme'),
            ...themeDocs.map((doc) => buildDocPage(doc)),
          ],
        }}
        {...rest}
      />
    </MDXProvider>
  </ThemeProvider>
);

const themeDocs = [
  'colors',
  'space',
  'fontSize',
  'fonts',
  'fontWeight',
  'lineHeight',
  'letterSpacing',
  'radii',
  'borderWidths',
];

const buildDocPage = (id) => ({
  url: `theme/doc/${id}`,
  input: `theme/doc/${id}.mdx`,
  data: {},
  nav: {
    key: id,
    parent: 'Theme',
  },
});
