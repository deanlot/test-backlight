import React, { ReactElement } from 'react';
import { SymbolIcon } from '../../src/IconVariants';
import { SpecializedSymbolProps } from '../types';

const path = (
  <path
    d="M6.13647 1.48076C6.52234 0.819257 7.47815 0.819259 7.86402 1.48076L13.123 10.4961C13.5119 11.1628 13.031 12 12.2592 12H1.74128C0.96949 12 0.488619 11.1628 0.877502 10.4961L6.13647 1.48076Z"
    fill="#F24D44"
  />
);
const WarningSymbol = ({ size = 'l', label }: SpecializedSymbolProps): ReactElement => {
  return <SymbolIcon label={label || 'warning-symbol'} size={size} path={path} />;
};

export default WarningSymbol;
