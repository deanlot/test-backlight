import React from 'react';
import { SpecializedIconProps } from '../../types';
import { BrandIcon } from '../../../src/IconVariants';

const BenchIcon = ({ size = 'm', color, label }: SpecializedIconProps) => (
  <BrandIcon label={label || 'bench'} size={size} color={color}>
    <svg width="100%" height="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.5 0.5H11.5V6C11.5 9.03757 9.03757 11.5 6 11.5C2.96243 11.5 0.5 9.03757 0.5 6V0.5Z" stroke="#121316" />
    </svg>
  </BrandIcon>
);

export default BenchIcon;
