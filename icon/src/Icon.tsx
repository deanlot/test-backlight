import React, { ReactNode } from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

// type Icon = {
//   name: string;
//   size: number;
//   path: string[];
// };

type IconProps = {
  label: string;
  size?: number;
  svg: ReactNode;
};

const Icon = ({ label, size, svg }: IconProps) => {
  return <AccessibleIcon.Root label={label}>{svg}</AccessibleIcon.Root>;
};

export default Icon;
