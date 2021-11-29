import React, { ReactNode } from 'react';
import CustomIcon from '../../custom-icon/src/CustomIcon';
import { PickedSVGProps, Sizes } from '../icons/icons';
import { Svg } from './Icon.styles';

const sizes = {
  s: 12,
  m: 16,
  l: 20,
  xl: 24,
};

export const getScaleMultiplier = (selectedSize, width, height) => ({
  widthMultiplier: selectedSize / width,
  heightMultiplier: selectedSize / height,
});

/**
 Icon component that renders SVGs from our icon library
 */
const Icon = ({ path, label, color, fill, size, width, height }: IconProps) => {
  const sizeDimension = sizes[size];
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
  width: number;
  height: number;
}

export default Icon;