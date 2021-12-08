import React, { ReactNode } from 'react';
import AccessibleIcon from '../../AccessibleIcon/src/AccessibleIcon';
import { IconContainer } from './Icon.styles';

export const IconBase = ({ label, color, fill, size, children }: IconBaseProps) => (
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

interface IconBaseProps {
  label: string;
  size: number;
  children: ReactNode;
  width?: number;
  height?: number;
  color?: string;
  fill?: string;
}
