import React from 'react';
import { TypographyProps } from '../base-typography/BaseTypography';
import { paragraphStyles, StyledParagraph } from './Paragraph.styles';

const Paragraph = ({ children, variant = 'medium' }: ParagraphProps) => (
  <StyledParagraph as="p" className={paragraphStyles({ variant })}>
    {children}
  </StyledParagraph>
);

type Variant = 'small' | 'medium' | 'large';

export interface ParagraphProps extends TypographyProps {
  /**
   * Variant of the button
   */
  variant?: Variant;
}

export default Paragraph;
