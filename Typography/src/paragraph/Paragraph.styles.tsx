import { css, styled } from '@stitches/react';
import BaseTypography from '../base-typography/BaseTypography';

export const StyledParagraph = styled(BaseTypography);
export const paragraphStyles = css({
  fontFamily: '$fonts$paragraph',
  fontWeight: '$fontWeights$regular',

  variants: {
    variant: {
      small: {
        fontSize: '$fontSizes$2',
        lineHeight: '$lineHeights$2',
      },
      medium: {
        fontSize: '$fontSizes$3',
        lineHeight: '$lineHeights$3',
      },
      large: {
        fontSize: '$fontSizes$4',
        lineHeight: '$lineHeights$4',
      },
    },
  },
});
