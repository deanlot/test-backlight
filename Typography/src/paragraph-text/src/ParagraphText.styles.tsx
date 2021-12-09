import { css, styled } from '@stitches/react';
import BaseTypography from '../../base-typography/src/BaseTypography';

export const StyledParagraphText = styled(BaseTypography);
export const paragraphTextStyles = css({
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
