import { styled } from '@stitches/react';
import BaseTypography from '../base-typography/BaseTypography';

export const StyledHelper = styled(BaseTypography, {
  fontFamily: '$helper',
  fontWeight: '$regular',
  fontStyle: 'italic',
  fontSize: '$2',
  lineHeight: '$4',
});
