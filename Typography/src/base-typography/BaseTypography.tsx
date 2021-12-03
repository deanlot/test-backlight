import React, { HTMLAttributes } from 'react';

const BaseTypography = ({ children, ...rest }: TypographyProps) => <span {...rest}>{children}</span>;

export interface TypographyProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'style'> {}

export default BaseTypography;
