import React, { ReactElement } from 'react';
import { SymbolIcon } from '../../../src/IconVariants';
import { SpecializedSymbolProps } from '../../types';

const DoneSymbol = ({ size = 'l', label }: SpecializedSymbolProps): ReactElement => {
  return (
    <SymbolIcon label={label || 'done-symbol'} size={size}>
      <svg width="100%" height="100%" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="4" cy="4" r="3" fill="#11BDAF" />
      </svg>
    </SymbolIcon>
  );
};

export default DoneSymbol;
