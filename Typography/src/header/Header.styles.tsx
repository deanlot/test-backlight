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
        lineHeight: '56px', // TODO - THEME
      },
      medium: {
        fontSize: '$fontSizes$9',
        lineHeight: '56px', // TODO - THEME
      },
      large: {
        fontSize: '$fontSizes$11',
        lineHeight: '60px', // TODO - THEME
      },
    },
  },
});
