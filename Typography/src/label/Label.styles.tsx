import { css, styled } from '@stitches/react';
import BaseTypography from '../base-typography/BaseTypography';

export const StyledLabel = styled(BaseTypography);
export const labelStyles = css({
  fontFamily: '$fonts$label',
  fontWeight: '$fontWeights$regular',
  lineHeight: '16px', // TODO - THEME
  letterSpacing: '12%', // TODO - THEME

  variants: {
    variant: {
      small: {
        fontSize: '$fontSizes$2',
      },
      medium: {
        fontSize: '$fontSizes$3',
      },
      large: {
        fontSize: '$fontSizes$4',
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
