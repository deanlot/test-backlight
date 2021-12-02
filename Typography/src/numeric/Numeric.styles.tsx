import { css, styled } from '@stitches/react';
import BaseTypography from '../base-typography/BaseTypography';

export const StyledNumeric = styled(BaseTypography);
export const numericStyles = css({
  fontFamily: '$numeric',
  fontWeight: '$bold',
  letterSpacing: '4%', // TODO: REVIEW

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
