import { css, styled } from '@stitches/react';
import BaseTypography from '../base-typography/BaseTypography';

export const StyledLabel = styled(BaseTypography);
export const labelStyles = css({
  fontFamily: '$label',
  fontWeight: '$regular',
  letterSpacing: '$3',

  variants: {
    variant: {
      small: {
        fontSize: '$2',
        lineHeight: '$2',
      },
      medium: {
        fontSize: '$3',
        lineHeight: '$3',
      },
      large: {
        fontSize: '$4',
        lineHeight: '$4',
      },
    },
    uppercase: {
      true: {
        textTransform: 'uppercase',
      },
    },
    bold: {
      true: {
        fontWeight: '$bold',
      },
    },
  },
});
