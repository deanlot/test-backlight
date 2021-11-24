import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { CoreLayout } from '@divriots/dockit-react/mdx-layout-core';

const themeDocs = [
  "colorsLight","colorsDark","space","fontSize","fonts","fontWeight","lineHeight","letterSpacing","radii","borderWidths"
]

export const MdxLayout = ({ components = {}, onSwitch, ...rest }) => {
  // Hack the menu by adding pages. Need to make sure they don't get added on every render too.
  // Also need to remove the default theme.mdx
  // __context also contains pageGraph which sets colorsDark as the default. That would need to change.
  rest.__context.pages = [
    ...rest.__context.pages.filter(({ nav }) => nav.key !== "theme"),
    ...(!rest.__context.pages.includes(({nav}) => nav.key === "colorsLight") && themeDocs.map((doc) => (
        {
          url: `theme/doc/${doc}`,
          input: `theme/doc/${doc}.mdx`,
          data: {},
          nav: {
            key: doc,
            parent: "Theme"
          }
        }
      )
    ))
  ];

  return <MDXProvider components={{ ...components }}>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/water.css/out/light.min.css"
    />
    <CoreLayout
      logo={
        <img
          src="https://mms.businesswire.com/media/20210603005032/en/882138/23/Bench_Logo.jpg"
          width="180px"
        />
      }
      {...rest}
    />
  </MDXProvider>
}
