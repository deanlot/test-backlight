import { css, styled } from '@stitches/react';
import BaseTypography from '../../base-typography/src/BaseTypography';

export const StyledActionText = styled(BaseTypography);
export const actionTextStyles = css({
  fontFamily: '$actions',
  fontWeight: '$bold',
  letterSpacing: '$2',

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
    },
    uppercase: {
      true: {
        textTransform: 'uppercase',
      },
    },
  },
});
