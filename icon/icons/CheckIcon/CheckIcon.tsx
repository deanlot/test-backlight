import React from 'react';
import Icon from '../../src/Icon';
import { Sizes } from '../../types';

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
  return <Icon label={label || 'check'} size={size} path={path} color={color} fill={fill} />;
};

type CheckIconProps = {
  /**
   * Use this to override the time that the success icon is displayed for
   */
  label?: string;
  /**
   * Use this to override the time that the success icon is displayed for
   */
  size?: Sizes;
  /**
   * Use this to override the time that the success icon is displayed for
   */
  fill?: string;
  /**
   * Use this to override the time that the success icon is displayed for
   */
  color?: string;
};

export default CheckIcon;
