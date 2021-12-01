import React, { ReactElement } from 'react';
import { SymbolIcon } from '../../../src/IconVariants';
import { SpecializedSymbolProps } from '../../types';

const path = <circle cx="3.00024" cy="3" r="3" fill="#11BDAF" />;
const DoneSymbol = ({ size = 'l', label }: SpecializedSymbolProps): ReactElement => {
  return <SymbolIcon label={label || 'done-symbol'} size={size} path={path} />;
};

export default DoneSymbol;
