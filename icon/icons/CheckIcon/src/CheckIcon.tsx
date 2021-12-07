import React, { ReactElement } from 'react';
import { SpecializedIconProps } from '../../types';
import { Icon } from '../../../src/IconVariants';

const CheckIcon = ({ size = 'm', color, label, fill }: SpecializedIconProps): ReactElement => {
  return (
    <Icon label={label || 'check'} size={size} color={color} fill={fill}>
      <svg width="100%" height="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9 3.2002L5.4 8.0002L3 5.6002"
          stroke="#121316"
          strokeWidth="1.125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Icon>
  );
};

export default CheckIcon;
