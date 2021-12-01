import { Sizes } from '../types';
import React, { ReactNode } from 'react';
import { SpecializedIconProps } from '../icons/types';
import { IconBase } from './IconBase';

/**
 Icon component that renders SVGs from our icon library
 */
export const Icon = ({ size, ...props }: IconVariant) => <IconBase {...props} size={iconSizes[size]} />;
const iconSizes: SizeBreakdown = {
  s: 12,
  m: 16,
  l: 20,
  xl: 24,
};

/**
 Icon component that renders Bench Brand SVGs with overridden, larger size numbers
 */
export const BrandIcon = ({ size, ...props }: IconVariant) => <IconBase {...props} size={brandIconSizes[size]} />;
const brandIconSizes: SizeBreakdown = {
  s: 12,
  m: 16,
  l: 24,
  xl: 40,
};

export const SymbolIcon = ({ size, ...props }: IconVariant) => <IconBase {...props} size={symbolIconSizes[size]} />;
const symbolIconSizes: SizeBreakdown = {
  s: 6,
  m: 10,
  l: 12,
  xl: 16,
};

type SizeBreakdown = {
  [key in Sizes]: number;
};

type IconVariant = {
  path: ReactNode | ReactNode[];
  label: string;
} & Omit<SpecializedIconProps, 'label'>;
