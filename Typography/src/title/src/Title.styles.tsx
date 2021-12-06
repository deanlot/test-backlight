import { css, styled } from '@stitches/react';
import BaseTypography from '../../base-typography/src/BaseTypography';

export const StyledTitle = styled(BaseTypography);
export const titleStyles = css({
  fontFamily: '$title',
  fontWeight: '$bold',

  variants: {
    variant: {
      small: {
        fontSize: '$4',
        lineHeight: '$4',
      },
      medium: {
        fontSize: '$6',
        lineHeight: '$6',
      },
      large: {
        fontSize: '$7',
        lineHeight: '$7',
      },
    },
  },
});
