import React from 'react';
import { TypographyProps } from '../../base-typography/src/BaseTypography';
import { labelTextStyles, StyledLabelText } from './LabelText.styles';

/**
 * Label description goes here
 */
export const LabelText = ({
  children,
  variant = 'medium',
  uppercase = false,
  bold = false,
  ...rest
}: LabelTextProps) => (
  <StyledLabelText className={labelTextStyles({ variant, bold, uppercase })} {...rest}>
    {children}
  </StyledLabelText>
);

type Variant = 'small' | 'medium' | 'large';

export interface LabelTextProps extends TypographyProps {
  /**
   * Variant of the label text
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
