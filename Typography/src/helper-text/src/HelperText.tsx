import React from 'react';
import { TypographyProps } from '../../base-typography/src/BaseTypography';
import { StyledHelperText } from './HelperText.styles';

/**
 * Helper description goes here
 */
export const HelperText = ({ variant, children, color }: HelperTextProps) => (
  <StyledHelperText variant={variant} css={{ ...(color && { color }) }}>
    {children}
  </StyledHelperText>
);

export interface HelperTextProps extends TypographyProps {
  variant?: 'error';
}
