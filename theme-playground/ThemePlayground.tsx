import React, { useEffect } from 'react';
import { ReactElement } from 'react';
import ThemePanel from '../theme-panel/ThemePanel';
import { ShadowPlayground } from '@divriots/dockit-react/playground';
import { useTheme } from '../theme-provider';

// These are the props of the divriots Playground.
// See the Playground component for reference.
type ThemePlaygroundProps = {
  code: string;
  scope?: object;
  noInline?: boolean;
};

const ThemePlayground = (props: ThemePlaygroundProps): ReactElement => {
  const { getCssText } = useTheme();

  useEffect(() => {
    console.log(getCssText);
  }, [getCssText]);

  console.log('test123');

  return (
    <ThemePanel>
      <ShadowPlayground {...props} styles={getCssText()} />
    </ThemePanel>
  );
};

export default ThemePlayground;
