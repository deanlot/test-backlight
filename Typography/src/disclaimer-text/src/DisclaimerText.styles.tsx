import { styled } from '@stitches/react';
import BaseTypography from '../../base-typography/src/BaseTypography';

export const StyledDisclaimerText = styled(BaseTypography, {
  fontFamily: '$disclaimer',
  fontWeight: '$regular',
  fontStyle: 'italic',
  fontSize: '$2',
  lineHeight: '$5',
});
