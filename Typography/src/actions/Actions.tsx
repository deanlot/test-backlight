import React from 'react';
import { TypographyProps } from '../base-typography/BaseTypography';
import { actionsStyles, StyledActions } from './Actions.styles';

const Actions = ({ children, variant = 'medium', uppercase = false }: ActionsProps) => (
  <StyledActions className={actionsStyles({ variant, uppercase })}>{children}</StyledActions>
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

export default Actions;
