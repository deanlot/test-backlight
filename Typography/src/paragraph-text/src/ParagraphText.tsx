import React from 'react';
import { TypographyProps } from '../../base-typography/src/BaseTypography';
import { paragraphTextStyles, StyledParagraphText } from './ParagraphText.styles';

/**
 * Paragraph description goes here
 */
export const ParagraphText = ({ children, variant = 'medium', ...rest }: ParagraphTextProps) => {
  return (
    <StyledParagraphText tag="p" className={paragraphTextStyles({ variant })} {...rest}>
      {children}
    </StyledParagraphText>
  );
};

type Variant = 'small' | 'medium' | 'large';

export interface ParagraphTextProps extends TypographyProps {
  /**
   * Variant of the paragraph text
   */
  variant?: Variant;
}
