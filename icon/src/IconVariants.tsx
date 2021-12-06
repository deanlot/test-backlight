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

/**
 Icon component that renders Symbols used in other components
 */
export const SymbolIcon = ({ size, ...props }: IconVariant) => (
  <IconBase height={6} width={6} {...props} size={symbolIconSizes[size]} />
);
const symbolIconSizes: SizeBreakdown = {
  s: 8,
  m: 12,
  l: 16,
  xl: 20,
};

type SizeBreakdown = {
  [key in Sizes]: number;
};

type IconVariant = {
  path: ReactNode | ReactNode[];
  label: string;
  height?: number;
  width?: number;
  color?: string;
} & Omit<SpecializedIconProps, 'label'>;
