import React, { ReactNode } from 'react';
import * as AccessibleIconPrimitive from '@radix-ui/react-accessible-icon';

export type AccessibleIconProps = {
  label: string;
  svg: ReactNode;
};

/**
  Custom Icon will render an SVG adding some accessibility labels
 */

const AccessibleIcon = ({ label, svg }: AccessibleIconProps) => {
  return <AccessibleIconPrimitive.Root label={label}>{svg}</AccessibleIconPrimitive.Root>;
};

export default AccessibleIcon;
