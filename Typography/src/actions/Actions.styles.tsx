import { css, styled } from '@stitches/react';
import BaseTypography from '../base-typography/BaseTypography';

export const StyledActions = styled(BaseTypography);
export const actionsStyles = css({
  fontFamily: '$actions',
  fontWeight: '$bold',
  letterSpacing: '6%', // TODO: REVIEW

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
