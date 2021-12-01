import React from 'react';
import { TypographyProps } from '../base-typography/BaseTypography';
import { numericStyles, StyledNumeric } from './Numeric.styles';

const Numeric = ({ children, variant = 'medium' }: NumericProps) => (
  <StyledNumeric as="h4" className={numericStyles({ variant })}>
    {children}
  </StyledNumeric>
);

type Variant = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';

export interface NumericProps extends TypographyProps {
  /**
   * Variant of the button
   */
  variant?: Variant;
}

export default Numeric;
