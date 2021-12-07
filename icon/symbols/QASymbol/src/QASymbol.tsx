import React, { ReactElement } from 'react';
import { SymbolIcon } from '../../../src/IconVariants';
import { SpecializedSymbolProps } from '../../types';

const QASymbol = ({ size = 'l', label }: SpecializedSymbolProps): ReactElement => {
  return (
    <SymbolIcon label={label || 'qa-symbol'} size={size}>
      <svg width="100%" height="100%" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="4" cy="4" r="2.25" stroke="#11BDAF" stroke-width="1.5" />
      </svg>
    </SymbolIcon>
  );
};

export default QASymbol;
