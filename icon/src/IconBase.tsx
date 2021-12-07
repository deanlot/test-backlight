import React, { ReactNode } from 'react';
import AccessibleIcon from '../../AccessibleIcon/src/AccessibleIcon';
import { IconContainer } from './Icon.styles';
import { PickedSVGProps } from '../types';

export const IconBase = ({ label, color, fill, size, children }: IconBaseProps) => {
  return (
    <AccessibleIcon label={label}>
      <IconContainer
        css={{
          width: size,
          height: size,
          'svg > path': {
            ...(color && { stroke: color }),
            ...(fill && { fill }),
          },
        }}
      >
        {children}
      </IconContainer>
    </AccessibleIcon>
  );
};

interface IconBaseProps extends PickedSVGProps {
  label: string;
  size: number;
  children: ReactNode;
  width?: number;
  height?: number;
  color?: string;
}
