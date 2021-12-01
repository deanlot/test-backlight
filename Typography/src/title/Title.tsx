import React from 'react';
import { TypographyProps } from '../base-typography/BaseTypography';
import { titleStyles, StyledTitle } from './Title.styles';

const Title = ({ children, variant = 'medium' }: TitleProps) => (
  <StyledTitle className={titleStyles({ variant })}>{children}</StyledTitle>
);

type Variant = 'small' | 'medium' | 'large';

export interface TitleProps extends TypographyProps {
  /**
   * Variant of the button
   */
  variant?: Variant;
}

export default Title;
