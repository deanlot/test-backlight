import React, { ReactElement } from 'react';
import { SymbolIcon } from '../../../src/IconVariants';
import { SpecializedSymbolProps } from '../../types';

const PendingSymbol = ({ size = 'l', label }: SpecializedSymbolProps): ReactElement => {
  return (
    <SymbolIcon label={label || 'pending'} size={size}>
      <svg width="100%" height="100%" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0.707106 4.70711C0.316582 4.31658 0.316582 3.68342 0.707107 3.29289L3.29289 0.707106C3.68342 0.316582 4.31658 0.316583 4.70711 0.707107L7.29289 3.29289C7.68342 3.68342 7.68342 4.31658 7.29289 4.70711L4.70711 7.29289C4.31658 7.68342 3.68342 7.68342 3.29289 7.29289L0.707106 4.70711Z"
          fill="#E5A139"
        />
      </svg>
    </SymbolIcon>
  );
};

export default PendingSymbol;
