import React from 'react';
import { TypographyProps } from '../../base-typography/src/BaseTypography';
import { numericTextStyles, StyledNumericText } from './NumericText.styles';

/**
 * Numeric description goes here
 */
export const NumericText = ({ children, variant = 'medium', color }: NumericTextProps) => (
  <StyledNumericText className={numericTextStyles({ variant })} css={{ ...(color && { color }) }}>
    {children}
  </StyledNumericText>
);

type Variant = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';

export interface NumericTextProps extends TypographyProps {
  /**
   * Variant of the numeric text
   */
  variant?: Variant;
}
