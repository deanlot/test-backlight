import React, { ReactElement } from 'react';
import { SpecializedIconProps } from '../../types';
import { Icon } from '../../../src/IconVariants';

const path = (
  <path
    d="M9 3.2002L5.4 8.0002L3 5.6002"
    stroke="#121316"
    strokeWidth="1.125"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
);

const CheckIcon = ({ size = 'm', color, label, fill }: SpecializedIconProps): ReactElement => {
  return <Icon label={label || 'check'} size={size} path={path} color={color} fill={fill} />;
};

export default CheckIcon;
