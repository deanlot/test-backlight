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
        lineHeight: '20px', // TODO - THEME
      },
      medium: {
        fontSize: '$fontSizes$6',
        lineHeight: '25px', // TODO - THEME
      },
      large: {
        fontSize: '$fontSizes$7',
        lineHeight: '30px', // TODO - THEME
      },
    },
  },
});
