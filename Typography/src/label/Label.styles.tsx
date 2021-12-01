import { css, styled } from '@stitches/react';
import BaseTypography from '../base-typography/BaseTypography';

export const StyledLabel = styled(BaseTypography);
export const labelStyles = css({
  fontFamily: '$fonts$label',
  fontWeight: '$fontWeights$regular',
  letterSpacing: '12%', // TODO: REVIEW

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
    uppercase: {
      true: {
        textTransform: 'uppercase',
      },
    },
    bold: {
      true: {
        fontWeight: '$fontWeights$bold',
      },
    },
  },
});
