import { styled } from '@stitches/react';
import BaseTypography from '../../base-typography/src/BaseTypography';

export const StyledHelperText = styled(BaseTypography, {
  fontFamily: '$helper',
  fontWeight: '$regular',
  fontStyle: 'italic',
  fontSize: '$2',
  lineHeight: '$4',
});
