import React, { ReactElement } from 'react';
import { SymbolIcon } from '../../../src/IconVariants';
import { SpecializedSymbolProps } from '../../types';

const WarningSymbol = ({ size = 'l', label }: SpecializedSymbolProps): ReactElement => {
  return (
    <SymbolIcon label={label || 'warning'} size={size}>
      <svg width="100%" height="100%" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3.56588 1.75971C3.75783 1.42381 4.24218 1.42381 4.43412 1.75971L7.57253 7.25193C7.76301 7.58526 7.52232 8 7.13841 8H0.86159C0.477679 8 0.236995 7.58526 0.427468 7.25193L3.56588 1.75971Z"
          fill="#F24D44"
        />
      </svg>
    </SymbolIcon>
  );
};

export default WarningSymbol;
