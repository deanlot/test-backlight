import React from 'react';
import { TypographyProps } from '../../base-typography/src/BaseTypography';
import { headerTextStyles, StyledHeaderText } from './HeaderText.styles';

/**
 * Header description goes here
 */
export const HeaderText = ({ children, variant = 'medium' }: HeaderTextProps) => (
  <StyledHeaderText as={getTagForVariant(variant)} className={headerTextStyles({ variant })}>
    {children}
  </StyledHeaderText>
);

type Variant = 'small' | 'medium' | 'large';

export interface HeaderTextProps extends TypographyProps {
  /**
   * Variant of the header text
   */
  variant?: Variant;
}

type Tags = 'h1' | 'h2' | 'h3';

const getTagForVariant = (variant: Variant): Tags => ({ small: 'h3', medium: 'h2', large: 'h1' }[variant] as Tags);
