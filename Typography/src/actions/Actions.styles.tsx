import { css, styled } from '@stitches/react';
import BaseTypography from '../base-typography/BaseTypography';

export const StyledActions = styled(BaseTypography);
export const actionsStyles = css({
  fontFamily: '$fonts$actions',
  fontWeight: '$fontWeights$bold',
  letterSpacing: '6%', // TODO: REVIEW

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
    },
    uppercase: {
      true: {
        textTransform: 'uppercase',
      },
    },
  },
});
