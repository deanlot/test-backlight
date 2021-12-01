import React, { ReactElement } from 'react';
import { SymbolIcon } from '../../src/IconVariants';
import { SpecializedSymbolProps } from '../types';

const path = <circle cx="6.00024" cy="6" r="6" fill="#11BDAF" />;

const DoneSymbol = ({ size = 'l', label }: SpecializedSymbolProps): ReactElement => {
  return <SymbolIcon label={label || 'done-symbol'} size={size} path={path} />;
};

export default DoneSymbol;
