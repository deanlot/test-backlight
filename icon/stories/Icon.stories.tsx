import React from 'react';
import CheckIcon from '../icons/CheckIcon/src/CheckIcon';
import { StoryLayout } from '~/layout';
import WarningSymbol from '../symbols/WarningSymbol/src/WarningSymbol';
export default StoryLayout;

export const IconSmall = () => <CheckIcon size="s" />;
export const IconMedium = () => <CheckIcon />;
export const IconLarge = () => <CheckIcon size="l" />;
export const IconExtraLarge = () => <CheckIcon size="xl" />;

export const SymbolSmall = () => <WarningSymbol size="s" />;
export const SymbolMedium = () => <WarningSymbol size="m" />;
export const SymbolLarge = () => <WarningSymbol size="l" />;
export const SymbolExtraLarge = () => <WarningSymbol size="xl" />;
