import React from 'react';
import { Sizes } from '../../icon/icons/icons';
import Icon from '../../icon/src/Icon';
import Small from './svg/Small';
import Medium from './svg/Medium';
import Large from './svg/Large';
import ExtraLarge from './svg/ExtraLarge';

// TODO: there must be a better way to handle this?
const sizedSVGs = {
  s: Small,
  m: Medium,
  l: Large,
  xl: ExtraLarge,
};

const CheckIcon = ({ size = 'm', color, label }: CheckIconProps) => {
  const SVG = sizedSVGs[size];
  return <Icon label={label || 'check'} color={color} svg={<SVG />} />;
};

type CheckIconProps = {
  label?: string;
  size?: Sizes;
  color?: string;
};

export default CheckIcon;
