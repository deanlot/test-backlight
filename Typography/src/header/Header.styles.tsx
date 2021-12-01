import { css, styled } from '@stitches/react';
import BaseTypography from '../base-typography/BaseTypography';

export const StyledHeader = styled(BaseTypography);
export const headerStyles = css({
  fontFamily: '$fonts$header',
  fontWeight: '$fontWeights$bold',

  variants: {
    variant: {
      small: {
        fontSize: '$fontSizes$8',
        lineHeight: '$lineHeights$8',
      },
      medium: {
        fontSize: '$fontSizes$9',
        lineHeight: '$lineHeights$9',
      },
      large: {
        fontSize: '$fontSizes$11',
        lineHeight: '$lineHeights$11',
      },
    },
  },
});
