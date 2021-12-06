import React, { ReactElement } from 'react';
import { SpecializedIconProps } from '../../types';
import { Icon } from '../../../src/IconVariants';

const path = [
  <path d="M0.375 6.29688H11.625" stroke="#121316" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />,
  <path
    d="M6.375 11.8068L11.625 6.29695L6.375 0.787109"
    stroke="#121316"
    strokeWidth="0.75"
    strokeLinecap="round"
    strokeLinejoin="round"
  />,
];

const ArrowRightIcon = ({ size = 'm', color, label, fill }: SpecializedIconProps): ReactElement => {
  return <Icon label={label || 'arrow-right'} size={size} path={path} color={color} fill={fill} />;
};

export default ArrowRightIcon;
