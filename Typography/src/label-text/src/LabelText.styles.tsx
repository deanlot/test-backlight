import { css, styled } from '@stitches/react';
import BaseTypography from '../../base-typography/src/BaseTypography';

export const StyledLabelText = styled(BaseTypography);
export const labelTextStyles = css({
  fontFamily: '$label',
  fontWeight: '$regular',

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
        letterSpacing: '$3',
      },
    },
    bold: {
      true: {
        fontWeight: '$bold',
      },
    },
  },
});
