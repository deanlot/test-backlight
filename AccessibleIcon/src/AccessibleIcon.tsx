import React, { ReactNode } from 'react';
import * as AccessibleIconPrimitive from '@radix-ui/react-accessible-icon';

export type AccessibleIconProps = {
  label: string;
  children: ReactNode;
};

/**
  Custom Icon will render an SVG adding some accessibility labels
 */
const AccessibleIcon = ({ label, children }: AccessibleIconProps) => (
  <AccessibleIconPrimitive.Root label={label}>{children}</AccessibleIconPrimitive.Root>
);

export default AccessibleIcon;
