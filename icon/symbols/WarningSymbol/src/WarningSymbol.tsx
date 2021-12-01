import React, { ReactElement } from 'react';
import { SymbolIcon } from '../../../src/IconVariants';
import { SpecializedSymbolProps } from '../../types';

// TODO: there's something up with this svg, I need to talk to Sean about it.
const path = (
  <path
    d="M3.132 0.519426C3.5159 -0.152389 4.48459 -0.152389 4.86849 0.519426L7.14531 4.50386C7.52625 5.17052 7.04489 6 6.27706 6H1.72342C0.955601 6 0.474234 5.17052 0.855181 4.50386L3.132 0.519426Z"
    fill="#F24D44"
  />
);
const WarningSymbol = ({ size = 'l', label }: SpecializedSymbolProps): ReactElement => {
  return <SymbolIcon label={label || 'warning-symbol'} size={size} path={path} height={7} width={8} />;
};

export default WarningSymbol;
