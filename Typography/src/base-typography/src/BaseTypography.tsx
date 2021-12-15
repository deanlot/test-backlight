import React, { HTMLAttributes } from 'react';
import { StyledBaseTypography } from './BaseTypography.styles';

type Tags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

const BaseTypography = ({ children, color, tag, ...rest }: TypographyProps) => (
  <StyledBaseTypography as={tag} css={{ ...(color && { color }) }} {...rest}>
    {children}
  </StyledBaseTypography>
);

export interface TypographyProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'style'> {
  color?: string;

  /**
   * Write something about tags here and why polymorphic as breaks
   */
  tag?: Tags;
}

export default BaseTypography;
