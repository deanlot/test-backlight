import React, { PropsWithChildren, ReactElement } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { CoreLayout } from '@divriots/dockit-react/mdx-layout-core';
import { ThemeProvider } from '../../theme-provider';
import { BENCH_LOGO } from './bench-logo';
import { docsConfig } from '../../docs.config';

export const MdxLayout = ({ components = {}, __context, ...rest }) => (
  <ThemeProvider>
    {console.log({ components, __context, ...rest })}
    {console.log(docsConfig)}
    <MDXProvider components={{ ...components }}>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css/out/light.min.css" />

      <PageLayout logo={BENCH_LOGO}>
        <Menu config={docsConfig} />
        <div>{rest.children}</div>
      </PageLayout>
    </MDXProvider>
  </ThemeProvider>
);

const relativeUrl = (url: string) =>
  [
    Array(url.split('/').length - 1)
      .fill('..')
      .join('/'),
    url,
  ].join('/');

type PageLayoutProps = {
  logo: string;
};

const PageLayout = ({ children, logo }: PropsWithChildren<PageLayoutProps>): ReactElement => (
  <>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        justifyItems: 'end',
        alignItems: 'end',
        borderBottom: '1px solid grey',
        marginBottom: 24,
      }}
    >
      <img src={logo} width="180px" />
      <h3 style={{ marginBottom: 20 }}>Bench Design System</h3>
    </div>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'max-content 1fr',
        columnGap: 64,
      }}
    >
      {children}
    </div>
  </>
);

type Section = {
  label: string;
  items: SectionItem[];
};

type SectionItem = {
  type: string;
  label: string;
  url?: string;
};

type MenuConfigProps = {
  config: Section[];
};

const Menu = ({ config }: MenuConfigProps): ReactElement => (
  <div>
    {config.map(({ label, items }, index) => (
      <MenuSection first={index === 0} key={label}>
        <MenuSectionLabel>{label}</MenuSectionLabel>
        <MenuSectionItems items={items} />
      </MenuSection>
    ))}
  </div>
);

type MenuSectionProps = {
  first?: boolean;
};

const MenuSection = ({ first = false, children }: PropsWithChildren<MenuSectionProps>): ReactElement => (
  <div style={first ? { marginTop: 32 } : { borderTop: '1px solid lightgrey', paddingTop: 24, marginTop: 24 }}>
    {children}
  </div>
);

type MenuSectionLabelProps = {
  children: React.ReactNode;
};

const MenuSectionLabel = ({ children }: MenuSectionLabelProps): ReactElement => (
  <div style={{ fontWeight: 'medium' }}>{children}</div>
);

type MenuSectionItemsProps = {
  items: SectionItem[];
};

const MenuSectionItems = ({ items }: MenuSectionItemsProps): ReactElement => {
  const ComponentType = {
    subsection: MenuSubsectionLabel,
    link: MenuSubsectionItem,
  };

  return (
    <ul style={{ listStyleType: 'none', padding: 0, margin: '16px 0 0' }}>
      {items.map(({ type, label, ...rest }) => {
        const Component = ComponentType[type];
        return (
          <Component key={`${type}-${label}`} {...rest}>
            {label}
          </Component>
        );
      })}
    </ul>
  );
};

type MenuSubsectionLabelProps = {
  children: React.ReactNode;
};

const MenuSubsectionLabel = ({ children }: MenuSectionLabelProps): ReactElement => (
  <div style={{ fontSize: 10, textTransform: 'uppercase', margin: '16px 0 8px' }}>{children}</div>
);

type MenuSubsectionItemProps = {
  url: string;
};

const MenuSubsectionItem = ({ url, children }: PropsWithChildren<MenuSubsectionItemProps>): ReactElement => (
  <li style={{ paddingLeft: 4 }}>
    <a href={relativeUrl(url)} style={{ margin: '4px 0', fontSize: 14 }}>
      {children}
    </a>
  </li>
);
