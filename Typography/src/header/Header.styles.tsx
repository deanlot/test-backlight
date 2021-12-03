import { css, styled } from '@stitches/react';
import BaseTypography from '../base-typography/BaseTypography';

export const StyledHeader = styled(BaseTypography);
export const headerStyles = css({
  fontFamily: '$header',
  fontWeight: '$bold',

  variants: {
    variant: {
      small: {
        fontSize: '$8',
        lineHeight: '$8',
      },
      medium: {
        fontSize: '$9',
        lineHeight: '$9',
      },
      large: {
        fontSize: '$11',
        lineHeight: '$11',
      },
    },
  },
});
