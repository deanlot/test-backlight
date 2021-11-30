import React, { ReactNode } from 'react';
import CustomIcon from '../../custom-icon/src/CustomIcon';
import { Svg } from './Icon.styles';
import { PickedSVGProps, Sizes } from '../types';
import { getScaleMultiplier } from './utils';

const sizes = {
  s: 12,
  m: 16,
  l: 20,
  xl: 24,
};

const brandSizes = {
  s: 12,
  m: 16,
  l: 24,
  xl: 40,
};

/**
 Icon component that renders SVGs from our icon library
 */
const Icon = ({ path, label, color, fill, size, width = 12, height = 12, brand = false }: IconProps) => {
  // brand icons have special sizing
  const sizeDimension = brand ? brandSizes[size] : sizes[size];
  const { widthMultiplier, heightMultiplier } = getScaleMultiplier(sizeDimension, width, height);

  const SVG = (
    <Svg
      width={`${sizeDimension}px`}
      height={`${sizeDimension}px`}
      viewBox={`0 0 ${sizeDimension} ${sizeDimension}`}
      fill={fill || 'none'}
      xmlns="http://www.w3.org/2000/svg"
      css={{
        '& g > path': {
          ...(color && { stroke: color }),
          ...(fill && { fill }),
        },
      }}
    >
      <g transform={`scale(${widthMultiplier}, ${heightMultiplier})`}>{path}</g>
    </Svg>
  );

  return <CustomIcon label={label} svg={SVG} />;
};

interface IconProps extends PickedSVGProps {
  label: string;
  size: Sizes;
  path: ReactNode;
  color: string;
  fill: string;
  width?: number;
  height?: number;
  brand?: boolean;
}

export default Icon;
