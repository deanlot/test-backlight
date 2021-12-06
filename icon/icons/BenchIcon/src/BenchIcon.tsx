import React from 'react';
import { SpecializedIconProps } from '../../types';
import { BrandIcon } from '../../../src/IconVariants';

const path = [
  <path d="M0.5 0.5H11.5V6C11.5 9.03757 9.03757 11.5 6 11.5C2.96243 11.5 0.5 9.03757 0.5 6V0.5Z" stroke="#121316" />,
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M8.375 4.125V5.08637H7.72552L8.05453 7.75H7.09725L6.76823 5.08637H5.23177L4.90275 7.75H3.94547L4.27448 5.08637H3.625V4.125H8.375Z"
    fill="#121316"
  />,
];

const BenchIcon = ({ size = 'm', color, label, fill }: SpecializedIconProps) => {
  return <BrandIcon label={label || 'bench'} size={size} path={path} color={color} fill={fill} />;
};

export default BenchIcon;
