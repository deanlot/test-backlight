import React from 'react';
import { Sizes } from '../../icon/icons/icons';
import Icon from '../../icon/src/Icon';

const path = (
  <path
    d="M9 3.2002L5.4 8.0002L3 5.6002"
    stroke="#121316"
    strokeWidth="1.125"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
);

const CheckIcon = ({ size = 'm', color, label, fill }: CheckIconProps) => {
  return <Icon label={label || 'check'} size={size} path={path} color={color} fill={fill} width={12} height={12} />;
};

type CheckIconProps = {
  label?: string;
  size?: Sizes;
  fill?: string;
  color?: string;
};

export default CheckIcon;
