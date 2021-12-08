import React from 'react';
import { TypographyProps } from '../../base-typography/src/BaseTypography';
import { headerStyles, StyledHeader } from './Header.styles';

/**
 * Header description goes here
 */
const Header = ({ children, variant = 'medium' }: HeaderProps) => (
  <StyledHeader as={getTagForVariant(variant)} className={headerStyles({ variant })}>
    {children}
  </StyledHeader>
);

type Variant = 'small' | 'medium' | 'large';

export interface HeaderProps extends TypographyProps {
  /**
   * Variant of the button
   */
  variant?: Variant;
}

type Tags = 'h1' | 'h2' | 'h3';

const getTagForVariant = (variant: Variant): Tags => ({ small: 'h3', medium: 'h2', large: 'h1' }[variant] as Tags);

export default Header;
