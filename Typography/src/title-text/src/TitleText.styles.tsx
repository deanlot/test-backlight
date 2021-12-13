import { css, styled } from '@stitches/react';
import BaseTypography from '../../base-typography/src/BaseTypography';

export const StyledTitleText = styled(BaseTypography);
export const titleTextStyles = css({
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
