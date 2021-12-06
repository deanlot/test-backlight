import React from 'react';
import { TypographyProps } from '../../base-typography/src/BaseTypography';
import { actionStyles, StyledActions } from './Action.styles';

/**
 * Action description goes here
 */
const Action = ({ children, variant = 'medium', uppercase = false }: ActionsProps) => (
  <StyledActions className={actionStyles({ variant, uppercase })}>{children}</StyledActions>
);

type Variant = 'small' | 'medium';

export interface ActionsProps extends TypographyProps {
  /**
   * Variant of the button
   */
  variant?: Variant;

  /**
   * Indicates that the text should be converted to uppercase
   */
  uppercase?: boolean;
}

export default Action;
