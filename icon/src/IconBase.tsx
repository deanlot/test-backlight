import React, { ReactNode } from 'react';
import AccessibleIcon from '../../AccessibleIcon/src/AccessibleIcon';
import { Svg } from './Icon.styles';
import { getScaleMultiplier } from './utils';
import { PickedSVGProps } from '../types';

export const IconBase = ({ path, label, stroke, fill, size, width = 12, height = 12 }: IconBaseProps) => {
  const { widthMultiplier, heightMultiplier } = getScaleMultiplier(size, width, height);

  const SVG = (
    <Svg
      width={`${size}px`}
      height={`${size}px`}
      viewBox={`0 0 ${size} ${size}`}
      fill={fill || 'none'}
      xmlns="http://www.w3.org/2000/svg"
      css={{
        '& g > path': {
          ...(stroke && { stroke }),
          ...(fill && { fill }),
        },
      }}
    >
      <g
        transform={`translate(${(size - width * widthMultiplier) / 2}, ${
          (size - height * heightMultiplier) / 2
        }) scale(${widthMultiplier}, ${heightMultiplier})`}
      >
        {path}
      </g>
    </Svg>
  );

  return <AccessibleIcon label={label} svg={SVG} />;
};

interface IconBaseProps extends PickedSVGProps {
  label: string;
  size: number;
  path: ReactNode | ReactNode[];
  width?: number;
  height?: number;
}
