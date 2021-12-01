import { css, styled } from '@stitches/react';
import BaseTypography from '../base-typography/BaseTypography';

export const StyledTitle = styled(BaseTypography);
export const titleStyles = css({
  fontFamily: '$fonts$title',
  fontWeight: '$fontWeights$bold',

  variants: {
    variant: {
      small: {
        fontSize: '$fontSizes$4',
        lineHeight: '$lineHeights$4',
      },
      medium: {
        fontSize: '$fontSizes$6',
        lineHeight: '$lineHeights$6',
      },
      large: {
        fontSize: '$fontSizes$7',
        lineHeight: '$lineHeights$7',
      },
    },
  },
});
