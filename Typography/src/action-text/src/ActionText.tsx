import React from 'react';
import { TypographyProps } from '../../base-typography/src/BaseTypography';
import { actionTextStyles, StyledActionText } from './ActionText.styles';

/**
 * Action description goes here
 */
export const ActionText = ({ children, variant = 'medium', uppercase = false, ...rest }: ActionTextProps) => (
  <StyledActionText className={actionTextStyles({ variant, uppercase })} {...rest}>
    {children}
  </StyledActionText>
);

type Variant = 'small' | 'medium';

export interface ActionTextProps extends TypographyProps {
  /**
   * Variant of the action text
   */
  variant?: Variant;

  /**
   * Indicates that the text should be converted to uppercase
   */
  uppercase?: boolean;
}
