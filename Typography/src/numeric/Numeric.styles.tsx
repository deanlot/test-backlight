import { css, styled } from '@stitches/react';
import BaseTypography from '../base-typography/BaseTypography';

export const StyledNumeric = styled(BaseTypography);
export const numericStyles = css({
  fontFamily: '$fonts$numeric',
  fontWeight: '$fontWeights$bold',
  letterSpacing: '4%', // TODO: REVIEW

  variants: {
    variant: {
      xsmall: {
        fontSize: '$fontSizes$3',
        lineHeight: '$lineHeights$3',
      },
      small: {
        fontSize: '$fontSizes$5',
        lineHeight: '$lineHeights$5',
      },
      medium: {
        fontSize: '$fontSizes$6',
        lineHeight: '$lineHeights$6',
      },
      large: {
        fontSize: '$fontSizes$8',
        lineHeight: '$lineHeights$8',
      },
      xlarge: {
        fontSize: '$fontSizes$10',
        lineHeight: '$lineHeights$10',
      },
    },
  },
});
