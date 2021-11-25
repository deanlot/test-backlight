import React from 'react';
import CustomIcon from '../../custom-icon/src/CustomIcon';
import { icons, PickedSVGProps, Sizes } from '../icons/icons';
import { Svg } from './Icon.styles';
import { getScale } from './utils';

const sizes = {
  s: 12,
  m: 16,
  l: 20,
  xl: 24,
};

/**
 Icon component that renders SVGs from our icon library
 */
const Icon = ({ label, size, fill, stroke, strokeLinecap, strokeLinejoin, strokeWidth, transform, d }: IconProps) => {
  const sizeDimension = sizes[size];

  const SVG = (
    <svg
      width={sizeDimension}
      height={sizeDimension}
      viewBox={`0 0 ${sizeDimension} ${sizeDimension}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={d}
        key={d}
        fill={fill}
        stroke={stroke}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
        strokeWidth={strokeWidth}
        transform={transform}
      />
    </svg>
  );

  return <CustomIcon label={label} svg={SVG} />;
};

interface IconProps extends PickedSVGProps {
  label: string;
  size: Sizes;
}

export default Icon;
