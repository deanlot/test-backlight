import React from 'react';
import CheckIcon from '../icons/CheckIcon/src/CheckIcon';
import { StoryLayout } from '~/layout';
import WarningSymbol from '../symbols/WarningSymbol/src/WarningSymbol';
import BenchIcon from '../icons/BenchIcon/src/BenchIcon';
import PendingSymbol from '../symbols/PendingSymbol/src/PendingSymbol';
export default StoryLayout;

export const IconSmall = () => <CheckIcon size="s" />;
export const IconMedium = () => <CheckIcon />;
export const IconLarge = () => <CheckIcon size="l" />;
export const IconExtraLarge = () => <CheckIcon size="xl" />;

export const SymbolSmall = () => <WarningSymbol size="s" />;
export const PendingSymbolSmall = () => <PendingSymbol size="s" />;
export const SymbolMedium = () => <WarningSymbol size="m" />;
export const SymbolLarge = () => <WarningSymbol size="l" />;
export const SymbolExtraLarge = () => <WarningSymbol size="xl" />;

export const BrandSmall = () => <BenchIcon size="s" />;
export const BrandMedium = () => <BenchIcon size="m" />;
export const BrandLarge = () => <BenchIcon size="l" />;
export const BrandExtraLarge = () => <BenchIcon size="xl" />;
