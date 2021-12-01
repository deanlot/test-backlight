import React from 'react';
import { TypographyProps } from '../base-typography/BaseTypography';
import { labelStyles, StyledLabel } from './Label.styles';

const Label = ({ children, variant = 'medium', uppercase = false, bold = false }: LabelProps) => (
  <StyledLabel className={labelStyles({ variant, bold, uppercase })}>{children}</StyledLabel>
);

type Variant = 'small' | 'medium' | 'large';

export interface LabelProps extends TypographyProps {
  /**
   * Variant of the button
   */
  variant?: Variant;

  /**
   * Indicates that the text should be converted to uppercase
   */
  uppercase?: boolean;

  /**
   * Indicates that the text should be bold
   */
  bold?: boolean;
}

export default Label;
