import React, { ReactElement } from 'react';
import { SpecializedIconProps } from '../../types';
import { Icon } from '../../../src/IconVariants';

const path = (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M10.0152 2.51517C10.1616 2.36872 10.1616 2.13128 10.0152 1.98483C9.86872 1.83839 9.63128 1.83839 9.48484 1.98483L6 5.46967L2.51517 1.98483C2.36872 1.83839 2.13128 1.83839 1.98483 1.98483C1.83839 2.13128 1.83839 2.36872 1.98483 2.51517L5.46967 6L1.98483 9.48484C1.83839 9.63128 1.83839 9.86872 1.98483 10.0152C2.13128 10.1616 2.36872 10.1616 2.51517 10.0152L6 6.53033L9.48484 10.0152C9.63128 10.1616 9.86872 10.1616 10.0152 10.0152C10.1616 9.86872 10.1616 9.63128 10.0152 9.48484L6.53033 6L10.0152 2.51517Z"
    fill="#121316"
  />
);

const CloseIcon = ({ size = 'm', stroke, label, fill }: SpecializedIconProps): ReactElement => {
  return <Icon label={label || 'close'} size={size} path={path} stroke={stroke} fill={fill} />;
};

export default CloseIcon;
