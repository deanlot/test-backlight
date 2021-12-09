import { css, styled } from '@stitches/react';
import BaseTypography from '../../base-typography/src/BaseTypography';

export const StyledNumericText = styled(BaseTypography);
export const numericTextStyles = css({
  fontFamily: '$numeric',
  fontWeight: '$bold',
  letterSpacing: '$1',

  variants: {
    variant: {
      xsmall: {
        fontSize: '$3',
        lineHeight: '$3',
      },
      small: {
        fontSize: '$5',
        lineHeight: '$5',
      },
      medium: {
        fontSize: '$6',
        lineHeight: '$6',
      },
      large: {
        fontSize: '$8',
        lineHeight: '$8',
      },
      xlarge: {
        fontSize: '$10',
        lineHeight: '$10',
      },
    },
  },
});
