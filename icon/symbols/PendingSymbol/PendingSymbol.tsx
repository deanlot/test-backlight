import React, { ReactElement } from 'react';
import { SymbolIcon } from '../../src/IconVariants';
import { SpecializedSymbolProps } from '../types';

const path = (
  <path
    d="M0.70735 8.70711C0.316826 8.31658 0.316827 7.68342 0.707351 7.29289L7.29314 0.707106C7.68366 0.316582 8.31683 0.316583 8.70735 0.707107L15.2931 7.29289C15.6837 7.68342 15.6837 8.31658 15.2931 8.70711L8.70735 15.2929C8.31683 15.6834 7.68366 15.6834 7.29314 15.2929L0.70735 8.70711Z"
    fill="#E5A139"
  />
);
const PendingSymbol = ({ size = 'l', label }: SpecializedSymbolProps): ReactElement => {
  return <SymbolIcon label={label || 'pending-symbol'} size={size} path={path} />;
};

export default PendingSymbol;
