import React, { ReactElement } from 'react';
import { SymbolIcon } from '../../../src/IconVariants';
import { SpecializedSymbolProps } from '../../types';

const path = <rect x="0.000244141" width="6" height="6" rx="1" fill="#F24D44" />;

const BlockSymbol = ({ size = 'l', label }: SpecializedSymbolProps): ReactElement => {
  return <SymbolIcon label={label || 'block-symbol'} size={size} path={path} />;
};

export default BlockSymbol;
