import React from 'react';
import { TypographyProps } from '../base-typography/BaseTypography';
import { headerStyles, StyledHeader } from './Header.styles';

const Header = ({ children, variant = 'medium' }: HeaderProps) => (
  <StyledHeader className={headerStyles({ variant })}>{children}</StyledHeader>
);

type Variant = 'small' | 'medium' | 'large';

export interface HeaderProps extends TypographyProps {
  /**
   * Variant of the button
   */
  variant?: Variant;
}

export default Header;
