import React, { ReactElement } from 'react';
import { SymbolIcon } from '../../src/IconVariants';
import { SpecializedSymbolProps } from '../types';

const path = <circle cx="6.00024" cy="6" r="4.5" stroke="#11BDAF" strokeWidth="3" />;

const QASymbol = ({ size = 'l', label }: SpecializedSymbolProps): ReactElement => {
  return <SymbolIcon label={label || 'qa-symbol'} size={size} path={path} />;
};

export default QASymbol;
