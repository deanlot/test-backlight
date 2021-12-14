import React from 'react';
import { TypographyProps } from '../../base-typography/src/BaseTypography';
import { titleTextStyles, StyledTitleText } from './TitleText.styles';

/**
 * Title description goes here
 */
export const TitleText = ({ children, variant = 'medium', color }: TitleTextProps) => (
  <StyledTitleText
    as={getTagForVariant(variant)}
    className={titleTextStyles({ variant })}
    css={{ ...(color && { color }) }}
  >
    {children}
  </StyledTitleText>
);

type Variant = 'small' | 'medium' | 'large';

export interface TitleTextProps extends TypographyProps {
  /**
   * Variant of the title text
   */
  variant?: Variant;
}

type Tags = 'h4' | 'h5' | 'h6';

const getTagForVariant = (variant: Variant): Tags => ({ small: 'h6', medium: 'h5', large: 'h4' }[variant] as Tags);
