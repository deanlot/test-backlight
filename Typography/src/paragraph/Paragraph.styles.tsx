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
        lineHeight: '18px', // TODO - THEME
      },
      medium: {
        fontSize: '$fontSizes$3',
        lineHeight: '20px', // TODO - THEME
      },
      large: {
        fontSize: '$fontSizes$4',
        lineHeight: '22px', // TODO - THEME
      },
    },
  },
});
