import React from 'react';
import { TypographyProps } from '../../base-typography/src/BaseTypography';
import { numericStyles, StyledNumeric } from './Numeric.styles';

/**
 * Numeric description goes here
 */
const Numeric = ({ children, variant = 'medium' }: NumericProps) => (
  <StyledNumeric className={numericStyles({ variant })}>{children}</StyledNumeric>
);

type Variant = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';

export interface NumericProps extends TypographyProps {
  /**
   * Variant of the button
   */
  variant?: Variant;
}

export default Numeric;
