import React, { ReactElement } from 'react';
import { SymbolIcon } from '../../../src/IconVariants';
import { SpecializedSymbolProps } from '../../types';

const path = <circle cx="3.00024" cy="3" r="2.25" stroke="#11BDAF" strokeWidth="1.5" />;

const QASymbol = ({ size = 'l', label }: SpecializedSymbolProps): ReactElement => {
  return <SymbolIcon label={label || 'qa-symbol'} size={size} path={path} />;
};

export default QASymbol;
