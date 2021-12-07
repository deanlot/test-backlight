import React, { ReactElement } from 'react';
import { SymbolIcon } from '../../../src/IconVariants';
import { SpecializedSymbolProps } from '../../types';

const BlockSymbol = ({ size = 'l', label }: SpecializedSymbolProps): ReactElement => (
  <SymbolIcon label={label || 'block'} size={size}>
    <svg width="100%" height="100%" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="6" height="6" rx="1" fill="#F24D44" />
    </svg>
  </SymbolIcon>
);

export default BlockSymbol;
