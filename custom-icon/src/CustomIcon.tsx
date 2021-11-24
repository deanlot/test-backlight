import React, { ReactNode } from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

export type CustomIconProps = {
  label: string;
  svg: ReactNode;
};

/**
  Custom Icon will render an SVG adding some accessibility labels
 */

const CustomIcon = ({ label, svg }: CustomIconProps) => {
  return <AccessibleIcon.Root label={label}>{svg}</AccessibleIcon.Root>;
};

export default CustomIcon;
