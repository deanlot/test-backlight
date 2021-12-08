import React, { ReactElement } from 'react';
import { SpecializedIconProps } from '../../types';
import { Icon } from '../../../src/IconVariants';

const ArrowRightIcon = ({ size = 'm', color, label }: SpecializedIconProps): ReactElement => (
  <Icon label={label || 'arrow right'} size={size} color={color}>
    <svg width="100%" height="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.375 6H11.625" stroke="#121316" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M6.375 11.25L11.625 6L6.375 0.75"
        stroke="#121316"
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </Icon>
);

export default ArrowRightIcon;
