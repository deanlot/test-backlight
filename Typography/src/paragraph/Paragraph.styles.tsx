import { css, styled } from '@stitches/react';
import BaseTypography from '../base-typography/BaseTypography';

export const StyledParagraph = styled(BaseTypography);
export const paragraphStyles = css({
  fontFamily: '$paragraph',
  fontWeight: '$regular',

  variants: {
    variant: {
      small: {
        fontSize: '$2',
        lineHeight: '$2',
      },
      medium: {
        fontSize: '$3',
        lineHeight: '$3',
      },
      large: {
        fontSize: '$4',
        lineHeight: '$4',
      },
    },
  },
});
