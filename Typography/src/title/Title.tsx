import React from 'react';
import { TypographyProps } from '../base-typography/BaseTypography';
import { titleStyles, StyledTitle } from './Title.styles';

const Title = ({ children, variant = 'medium' }: TitleProps) => (
  <StyledTitle as={getTagForVariant(variant)} className={titleStyles({ variant })}>
    {children}
  </StyledTitle>
);

type Variant = 'small' | 'medium' | 'large';

export interface TitleProps extends TypographyProps {
  /**
   * Variant of the button
   */
  variant?: Variant;
}

type Tags = 'h4' | 'h5' | 'h6';

const getTagForVariant = (variant: Variant): Tags => ({ small: 'h6', medium: 'h5', large: 'h4' }[variant] as Tags);

export default Title;
