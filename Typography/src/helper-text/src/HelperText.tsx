import React from 'react';
import { TypographyProps } from '../../base-typography/src/BaseTypography';
import { StyledHelperText } from './HelperText.styles';

/**
 * Helper description goes here
 */
export const HelperText = ({ variant, children, ...rest }: HelperTextProps) => (
  <StyledHelperText variant={variant} {...rest}>
    {children}
  </StyledHelperText>
);

export interface HelperTextProps extends TypographyProps {
  variant?: 'error';
}
