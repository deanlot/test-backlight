import React, { HTMLAttributes } from 'react';

const BaseTypography = ({ children, ...rest }: TypographyProps) => <span {...rest}>{children}</span>;

export interface TypographyProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'style'> {
  color?: string;
}

export default BaseTypography;
