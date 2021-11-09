import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { CoreLayout } from '@divriots/dockit-react/mdx-layout-core';

export const MdxLayout = ({ components = {}, onSwitch, ...rest }) => (
  <MDXProvider components={{ ...components }}>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/water.css/out/light.min.css"
    />
    <CoreLayout
      logo={
        <img
          src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png"
          width="180px"
        />
      }
      {...rest}
    />
  </MDXProvider>
);
