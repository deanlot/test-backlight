import React from 'react';
import { ReactElement } from 'react';
import ThemePanel from '../../theme-panel/ThemePanel';
import { Playground } from '@divriots/dockit-react/playground';

// These are the props of the divriots Playground.
// See the Playground component for reference.
type ThemePlaygroundProps = {
  code: string;
  scope?: object;
  noInline?: boolean;
};

const ThemePlayground = (props: ThemePlaygroundProps): ReactElement => (
  <ThemePanel>
    <Playground {...props} />
  </ThemePanel>
);

export default ThemePlayground;
