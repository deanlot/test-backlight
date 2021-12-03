import { styled } from '@stitches/react';
import BaseTypography from '../base-typography/BaseTypography';

export const StyledDisclaimer = styled(BaseTypography, {
  fontFamily: '$disclaimer',
  fontWeight: '$regular',
  fontStyle: 'italic',
  fontSize: '$2',
  lineHeight: '$5',
});
